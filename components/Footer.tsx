export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-900 py-6 text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.15em] sm:flex-row md:px-10">
        <span>© {new Date().getFullYear()} Aasish dangol</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
