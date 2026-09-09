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
    <div className="frame-corners relative w-full max-w-[92vw] text-ink/90 sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
      <div className="overflow-hidden rounded-sm border border-ink-700/40 bg-ink-900 shadow-[4px_4px_0_0_rgba(232,163,61,0.25)] sm:shadow-[6px_6px_0_0_rgba(232,163,61,0.25)] md:shadow-[8px_8px_0_0_rgba(232,163,61,0.25)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800 px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#E8746A] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-amber sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#6FCF97] sm:h-2.5 sm:w-2.5" />
          <span className="ml-2 truncate font-mono text-[10px] text-white/40 sm:text-[11px]">
            about-me.ts
          </span>
        </div>
        <div className="bg-grid-dark bg-grid overflow-x-auto px-3 py-4 font-mono text-[11px] leading-6 sm:px-5 sm:py-6 sm:text-[13px] sm:leading-7 md:text-sm">
          {lines.slice(0, visibleLines + 1).map((line, i) => {
            const isCurrent = i === visibleLines;
            const text = isCurrent ? line.slice(0, charCount) : line;
            return (
              <div key={i} className="flex min-w-max">
                <span className="mr-3 w-4 select-none text-white/25 sm:mr-4">
                  {i + 1}
                </span>
                <span className="whitespace-pre text-amber-light">
                  {text}
                  {isCurrent && (
                    <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-blink bg-amber sm:h-4" />
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