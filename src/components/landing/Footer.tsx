import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Explore",
    links: ["Why Tendor", "How counselling works", "FAQ"],
  },
  {
    title: "Support",
    links: ["Academic", "Mental health", "Relationships", "Health"],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 font-display text-[1.15rem] leading-snug text-ivory/70">
              Transforming Emotions
              <br />
              Nurturing Development
              <br />
              Empowering Relationships
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-ivory/40">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-[0.78rem] text-ivory/75 transition-colors hover:text-ivory"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/15 pt-6 text-[0.68rem] text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Tendor. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-ivory">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-ivory">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
