import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const PORT = 9333;
const url = process.argv[2];
const outPath = process.argv[3];
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 900);

const proc = spawn(EDGE, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  `--remote-debugging-port=${PORT}`,
  "--remote-debugging-address=127.0.0.1",
  "--window-size=" + width + "," + height,
  "about:blank",
]);

function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === "page");
      if (page && page.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await wait(300);
  }
  throw new Error("CDP did not come up");
}

function send(ws, id, method, params = {}) {
  return new Promise((resolve) => {
    const handler = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === id) {
        ws.removeEventListener("message", handler);
        if (msg.error) console.error(method, "ERROR", JSON.stringify(msg.error));
        resolve(msg.result);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

(async () => {
  const wsUrl = await getWsUrl();
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve) => ws.addEventListener("open", resolve));

  let id = 1;
  await send(ws, id++, "Page.enable");
  await send(ws, id++, "Emulation.setDeviceMetricsOverride", {
    width, height, deviceScaleFactor: 1, mobile: width < 500,
  });
  await send(ws, id++, "Page.navigate", { url });
  await wait(1500);

  // Scroll through the whole page once so every IntersectionObserver-based
  // reveal has a chance to fire (real users scroll; headless capture doesn't).
  for (let y = 0; y < 6000; y += 400) {
    await send(ws, id++, "Runtime.evaluate", { expression: `window.scrollTo(0, ${y})` });
    await wait(150);
  }
  await send(ws, id++, "Runtime.evaluate", {
    expression: "document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0;",
  });
  await wait(500);

  const metrics = await send(ws, id++, "Page.getLayoutMetrics");
  console.error("metrics:", JSON.stringify(metrics));
  const fullHeight = Math.ceil(
    (metrics.cssContentSize || metrics.contentSize).height
  );

  const shot = await send(ws, id++, "Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height: fullHeight, scale: 1 },
  });

  writeFileSync(outPath, Buffer.from(shot.data, "base64"));
  ws.close();
  proc.kill();
  console.log("wrote", outPath, width, "x", fullHeight);
})().catch((e) => {
  console.error(e);
  proc.kill();
  process.exit(1);
});
