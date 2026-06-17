import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function ContactPage() {
  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-primary/80">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          Say <span className="gold-text italic">hello.</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          For commissions, workshop questions, or to ask about a piece — send a
          note below or reach out on Instagram.
        </p>
        <Ornament className="mt-8" />
      </header>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <form className="surface-card md:col-span-7 flex flex-col gap-5 rounded-2xl border border-border/40 p-8">
          <Field id="name" label="Name" />
          <Field id="email" label="Email" type="email" />
          <Field id="subject" label="Subject" />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-primary/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="rounded-md border border-border/50 bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
            />
          </div>
          <Button type="submit" size="lg" className="self-start">
            Send Message
          </Button>
        </form>

        <aside className="md:col-span-5 space-y-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="surface-card group block rounded-2xl border border-primary/30 p-6 transition-all hover:border-primary hover:glow-gold"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary">
                <InstagramIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Instagram</p>
                <p className="font-serif text-xl">@hoorinaz.art</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The fastest way to see the latest pieces and ask quick questions.
            </p>
          </a>

          <div className="surface-card rounded-2xl border border-border/40 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Email</p>
                <a href="mailto:hello@hoorinaz.ca" className="font-serif text-xl hover:text-primary">
                  hello@hoorinaz.ca
                </a>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-2xl border border-border/40 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Studio</p>
                <p className="font-serif text-xl">Toronto, Canada</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              In-person workshops are hosted at the studio. Address shared on
              registration.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-primary/80">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="h-11 rounded-md border border-border/50 bg-background/60 px-4 text-sm outline-none transition-colors focus:border-primary/70"
      />
    </div>
  );
}
