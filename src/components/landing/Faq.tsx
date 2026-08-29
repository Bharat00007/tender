import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";

const ITEMS = [
  {
    q: "What is counselling, and how can it help?",
    a: "Counselling is a confidential conversation with a trained professional. It gives you space to understand what you are feeling, why certain patterns repeat, and what choices are available to you — at your own pace, without judgement.",
  },
  {
    q: "Is counselling only for a crisis?",
    a: "No. Many people come to counselling long before things feel unmanageable — for exam pressure, a difficult decision, or simply to understand themselves better.",
  },
  {
    q: "Can parents and teenagers attend together?",
    a: "Yes. Sessions can be individual, joint or a combination, depending on what will help the family most. We discuss this together before we begin.",
  },
  {
    q: "Is what I share kept confidential?",
    a: "Everything you share stays between you and your counsellor. The only exceptions are situations involving risk to life, which we explain clearly in the first session.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <Eyebrow>Questions people usually ask</Eyebrow>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <h2 className="max-w-[12ch] font-display text-[2rem] leading-[1.08] text-forest sm:text-[2.7rem]">
                Before your first conversation
              </h2>
              <p className="mt-6 max-w-[34ch] text-[0.75rem] leading-relaxed text-muted-foreground">
                A few answers that may help before you reach out for the first time.
              </p>
            </div>

            <ul className="border-t border-border">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b border-border">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left text-[0.85rem] font-medium text-forest transition-colors hover:text-terracotta"
                      >
                        {item.q}
                        <span
                          aria-hidden="true"
                          className="relative h-3 w-3 shrink-0 text-terracotta"
                        >
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                          <span
                            className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[62ch] pb-6 text-[0.78rem] leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
