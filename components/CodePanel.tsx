"use client";

import { useEffect, useState } from "react";

const lines = [
  "const developer = {",
  '  name: "Aasish Dangol",',
  '  role: "Frontend Engineer",',
  '  stack: ["React", "Next.js", "TypeScript"],',
  '  focus: "fast, accessible interfaces",',
  '  status: "open to work",',
  "};",
];

export default function CodePanel() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines];
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  return (
    <div className="frame-corners relative w-full max-w-md text-ink/90">
      <div className="overflow-hidden rounded-sm border border-ink-700/40 bg-ink-900 shadow-[8px_8px_0_0_rgba(232,163,61,0.25)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8746A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6FCF97]" />
          <span className="ml-2 font-mono text-[11px] text-white/40">
            about-me.ts
          </span>
        </div>
        <div className="bg-grid-dark bg-grid px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
          {lines.slice(0, visibleLines + 1).map((line, i) => {
            const isCurrent = i === visibleLines;
            const text = isCurrent ? line.slice(0, charCount) : line;
            return (
              <div key={i} className="flex">
                <span className="mr-4 w-4 select-none text-white/25">
                  {i + 1}
                </span>
                <span className="whitespace-pre text-amber-light">
                  {text}
                  {isCurrent && (
                    <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-amber" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
