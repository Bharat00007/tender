export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-forest" : "text-ivory";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${color}`} aria-label="Tender home">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          d="M12 21c0-6 3.6-9.6 9-10.2C21 16.4 17.6 20.2 12 21Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M12 21C12 15 8.4 11.4 3 10.8 3 16.4 6.4 20.2 12 21Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M12 21V6" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="4" r="1.6" fill="currentColor" />
      </svg>
      <span className="text-[0.8rem] font-medium uppercase tracking-[0.3em]">Tender</span>
    </a>
  );
}
