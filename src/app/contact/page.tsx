import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container max-w-xl py-16">
      <h1 className="font-serif text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Have a question or want to work together? Send a message.
      </p>

      <form className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="rounded-md border bg-background px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-md border bg-background px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-md border bg-background px-3 py-2 text-sm"
            required
          />
        </div>
        <Button type="submit" className="self-start">
          Send Message
        </Button>
      </form>

      <div className="mt-10 flex gap-6 text-sm">
        <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
          Instagram
        </a>
        <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
          Facebook
        </a>
      </div>
    </div>
  );
}
