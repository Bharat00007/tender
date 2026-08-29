import { ArrowRight, Lock, GraduationCap, HeartHandshake } from "lucide-react";
import heroImage from "@/assets/hero-counseling.jpg";
import { Eyebrow, Reveal } from "./Reveal";

const TRUST = [
  { icon: Lock, label: "Confidential" },
  { icon: GraduationCap, label: "Trained therapists" },
  { icon: HeartHandshake, label: "Trauma-aware" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-ivory">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[1fr_1.05fr]">
        <Reveal className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:py-12 lg:pr-14">
          <Eyebrow>Counselling for real life</Eyebrow>
          <h2 className="mt-4 max-w-[14ch] font-display text-[2.15rem] leading-[1.05] tracking-[-0.01em] text-forest sm:text-[2.7rem] lg:text-[3rem] xl:text-[3.4rem]">
            You don&rsquo;t have to carry it{" "}
            <em className="italic text-terracotta">alone.</em>
          </h2>
          <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            A therapy-first, confidential space for students, individuals, couples and families to
            pause, feel heard and find a way forward.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a
              href="#counselling"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[0.85rem] font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Learn how it works <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#why"
              className="border-b border-forest/40 pb-0.5 text-[0.85rem] font-medium text-forest transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Understand Tender
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-terracotta" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative min-h-[270px] sm:min-h-[360px] lg:min-h-[480px]">
          <img
            src={heroImage}
            alt="An elderly counsellor listening attentively to a teenage student during a counselling session"
            width={1104}
            height={1312}
            className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
          />

          <figure className="absolute bottom-5 right-0 max-w-[15rem] bg-ivory px-5 py-4 sm:bottom-8 sm:right-6">
            <blockquote className="flex gap-2 text-[0.72rem] leading-relaxed text-foreground/80">
              <span aria-hidden="true" className="font-display text-lg leading-none text-terracotta">
                &ldquo;
              </span>
              Sometimes the first step is simply being heard.
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
