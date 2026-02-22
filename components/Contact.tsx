"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 bg-background">
      <div className="max-w-xl mx-auto">
        <h2 className="font-sans font-bold text-primary text-2xl sm:text-3xl tracking-tight mb-2 text-center">
          Get in touch
        </h2>
        <p className="text-graphite/70 text-center text-sm mb-10">
          Share your idea and we’ll shape it into an experience.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-[2rem] p-6 sm:p-8 border border-primary/10 bg-ghost/30"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-1">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 text-primary placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-1">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 text-primary placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-primary mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 text-primary placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          {status === "sent" && (
            <p className="text-accent text-sm font-medium">Thanks. We’ll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-accent text-white font-medium flex items-center justify-center gap-2 btn-magnetic disabled:opacity-50"
          >
            <Send size={18} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
