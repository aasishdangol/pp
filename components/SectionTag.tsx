type SectionTagProps = {
  index: string; // e.g. "A" or "02"
  label: string;
};

export default function SectionTag({ index, label }: SectionTagProps) {
  return (
    <div className="flex items-center gap-3 mb-10 select-none">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/30 font-mono text-xs text-ink/70">
        {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-muted">
        {label}
      </span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
