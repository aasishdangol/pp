import SectionTag from "./SectionTag";
import Imagp from "../public/images/pp.png"
import Image from "next/image";

const stats = [
  { value: "4+", label: "Years building UI" },
  { value: "30+", label: "Projects shipped" },
  { value: "98", label: "Avg. Lighthouse score" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTag index="A" label="About" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <div className="frame-corners relative mx-auto aspect-[4/5] w-full max-w-xs border border-ink/30 bg-ink-900/[0.03] sm:max-w-sm">
            <div className="absolute inset-4 flex items-center justify-center border border-dashed border-ink/25">
            <Image
                src={Imagp}
                alt="Portrait photo"
                fill
                sizes="(max-width: 640px) 320px, 384px"
                className="object-cover"
                priority
              />
            </div>
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-muted">
              fig. 01
            </span>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Equal parts design eye and engineering rigor.
            </h2>
            <div className="mt-6 space-y-4 font-body leading-relaxed text-charcoal/80">
              <p>
                I started out tinkering with HTML tables and never really
                stopped tinkering — just swapped tables for component trees.
                Today I build interfaces with React and Next.js, with a focus
                on performance, accessibility, and the small interaction
                details most people won&apos;t consciously notice but will
                feel.
              </p>
              <p>
                I care about clean component architecture as much as clean
                visuals: predictable state, sensible file structure, and CSS
                that doesn&apos;t fight the next person who opens the file.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-5 text-center sm:px-6">
                  <div className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
