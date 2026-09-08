import SectionTag from "./SectionTag";

const groups = [
  {
    label: "Core",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript / Javascript", level: 88 },
    ],
  },
  {
    label: "Styling",
    items: [
      { name: "Tailwind CSS", level: 94 },
      { name: "CSS / SCSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Figma", level: 78 },
      { name: "Testing", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTag index="B" label="Tooling & Stack" />

        <h2 className="max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
          The instruments on the bench.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-amber-dark">
                {group.label}
              </h3>
              <ul className="space-y-6">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-body text-sm font-medium text-charcoal">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-slate-muted">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-line">
                      <div
                        className="h-1.5 bg-ink"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
