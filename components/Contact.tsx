"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionTag from "./SectionTag";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form handler of choice (Formspree, Resend, an API route, etc.)
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="border-t border-line bg-ink-900 py-24 text-paper"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-3 select-none">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/30 font-mono text-xs text-paper/70">
            D
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            Get In Touch
          </span>
          <span className="h-px flex-1 bg-paper/15" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-sm font-body leading-relaxed text-paper/70">
              I&apos;m currently open to freelance work and full-time roles.
              Tell me a bit about what you&apos;re building — I usually reply
              within a day or two.
            </p>

            <div className="mt-10 space-y-3 font-mono text-sm text-paper/80">
              <a
                href="mailto:gironspace7788@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-amber"
              >
                <Mail size={16} /> hello@aasishdangol.dev
              </a>
              <a
            href="https://github.com/aasishdangol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-amber"
              >
                <Github size={16} /> github.com/aasishdangol
              </a>
              <a
             href="https://www.linkedin.com/in/aasish-dangol-a2256a212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-amber"
              >
                <Linkedin size={16} /> linkedin.com/in/aasishdangol
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-paper/60"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-paper/25 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-paper/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-paper/25 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-paper/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none border border-paper/25 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-900 transition-colors hover:bg-amber-light sm:w-auto"
            >
              Send Message
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="font-mono text-xs text-amber-light"
              >
                Message captured — connect this form to your backend to send
                it for real.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
