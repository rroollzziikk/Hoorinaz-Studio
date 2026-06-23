import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function ContactPage() {
  return (
    <div className="container py-20 sm:py-28">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          Say <span className="italic text-accent">hello.</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          For commissions, workshop questions, or to ask about a piece — send a
          note below or reach out on Instagram.
        </p>
        <Ornament className="mt-8" />
      </header>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <form className="surface-card md:col-span-7 flex flex-col gap-5 rounded-md border border-border p-8">
          <Field id="name" label="Name" />
          <Field id="email" label="Email" type="email" />
          <Field id="subject" label="Subject" />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-accent">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/40"
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
            className="surface-card group block rounded-md border border-border p-6 transition-colors duration-300 hover:border-foreground/30"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground">
                <InstagramIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">Instagram</p>
                <p className="font-serif text-xl">@hoorinaz.art</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The fastest way to see the latest pieces and ask quick questions.
            </p>
          </a>

          <div className="surface-card rounded-md border border-border p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">Email</p>
                <a href="mailto:hello@hoorinaz.ca" className="font-serif text-xl hover:text-accent">
                  hello@hoorinaz.ca
                </a>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-md border border-border p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">Studio</p>
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
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-accent">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="h-11 rounded-sm border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-foreground/40"
      />
    </div>
  );
}
