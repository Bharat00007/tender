import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Why Tender", href: "#why" },
  { label: "Counselling", href: "#counselling" },
  { label: "Resources", href: "#resources" },
  { label: "Services", href: "#services" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ivory/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8 lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden justify-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-medium text-foreground/80 transition-colors hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>


        <div className="flex items-center justify-end gap-3">
          <a
            href="#book"
            className="hidden items-center gap-1.5 border-b border-forest/40 pb-0.5 text-[0.78rem] font-medium text-forest transition-colors hover:border-terracotta hover:text-terracotta lg:inline-flex"
          >
            Book a session <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-forest lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-ivory px-5 pb-6 pt-4 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-3 font-display text-xl text-forest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-[0.8rem] font-medium text-ivory"
          >
            Book a session <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
