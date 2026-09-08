import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import CodePanel from "./CodePanel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-light bg-grid pt-28"
    >
      {/* faint blueprint ruler edge */}
      <div className="absolute inset-x-0 top-0 h-10 border-b border-line" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div className="animate-fadeUp">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-amber-dark">
            Frontend Developer — Spec Sheet
          </p>
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Drafting interfaces
            <br />
            that hold up under
            <br />
            <span className="relative inline-block">
              real use.
              <svg
                className="absolute -bottom-2 left-0 w-full text-amber"
                height="8"
                viewBox="0 0 220 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 5.5C40 1.5 120 1.5 218 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-charcoal/80">
            I&apos;m Aasish Dangol, a frontend developer who builds fast,
            accessible, pixel-precise interfaces with React, Next.js and
            TypeScript — from first wireframe to shipped product.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ink-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="frame-corners border border-ink/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink/5"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-ink/70">
            <a
              href="https://github.com/aasishdangol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-amber-dark"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aasish-dangol-a2256a212/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-amber-dark"
            >
              <Linkedin size={20} />
            </a>
            <a
            href="mailto:gironspace7788@gmail.com"
              aria-label="Email Aasish"
              className="transition-colors hover:text-amber-dark"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <CodePanel />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/40 transition-colors hover:text-amber-dark"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
