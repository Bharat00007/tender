import {
  ArrowRight,
  BookOpen,
  Brain,
  Users,
  Activity,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import storyImage from "@/assets/story-session.jpg";
import { Eyebrow, Reveal } from "./Reveal";

export function BrandStatement() {
  return (
    <section id="why" className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>What Tender means</Eyebrow>
            <h2 className="mt-6 font-display text-[2rem] leading-[1.14] text-forest sm:text-[2.7rem] lg:text-[3.1rem]">
              Transforming <em className="italic text-terracotta">Emotions</em>
              <br />
              Nurturing <em className="italic text-terracotta">Development</em>
              <br />
              Empowering <em className="italic text-terracotta">Relationships</em>
            </h2>
          </div>

          <div className="grid gap-6 text-[0.85rem] leading-relaxed text-muted-foreground sm:grid-cols-2 sm:gap-10 lg:pb-2">
            <p>
              At every life stage, emotional pressure can affect mental health, learning and
              relationships. Family conflict can change how a young person studies, sleeps and
              believes in themselves.
            </p>
            <p>
              Tender is not made in a vacuum. We begin with the whole person — academic, emotional,
              relational — and work towards understanding, resilience and healthier relationships.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CARDS = [
  {
    title: "Academic Counselling",
    icon: BookOpen,
    tint: "bg-sage",
    body: "Clarity for study choices, daily habits, exam stress, career decisions and the confidence to keep going.",
  },
  {
    title: "Mental Health Counselling",
    icon: Brain,
    tint: "bg-blush",
    body: "Support for anxiety, low mood, burnout, sleep and self-worth, at a pace that feels safe and steady.",
  },
  {
    title: "Relationship Counselling",
    icon: Users,
    tint: "bg-sand",
    body: "Space for couples, parents, teenagers and siblings to be heard and to rebuild trust at home.",
  },
  {
    title: "Health Counselling",
    icon: Activity,
    tint: "bg-mint",
    body: "Care for the emotional side of living with illness, lifestyle change and long-term treatment.",
  },
];

export function Categories() {
  return (
    <section id="counselling" className="border-b border-border bg-beige">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <Eyebrow>How we support you</Eyebrow>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="max-w-[18ch] font-display text-[2rem] leading-[1.12] text-forest sm:text-[2.6rem]">
              One life. Many layers of care.
            </h2>
            <p className="max-w-[42ch] text-[0.82rem] leading-relaxed text-muted-foreground lg:ml-auto">
              Choose the care that feels right now, or speak to us and we&rsquo;ll help you find the
              layer of support that fits where you are.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ title, icon: Icon, tint, body }) => (
            <Reveal as="li" key={title} className={`group ${tint} px-6 pb-6 pt-7 transition-colors`}>
              <div className="flex justify-end">
                <Icon className="h-5 w-5 text-forest/60" aria-hidden="true" />
              </div>
              <h3 className="mt-14 max-w-[10ch] font-display text-[1.45rem] leading-tight text-forest">
                {title}
              </h3>
              <p className="mt-4 min-h-[5.5rem] text-[0.75rem] leading-relaxed text-foreground/70">
                {body}
              </p>
              <a
                href="#services"
                className="mt-4 flex items-center justify-between border-t border-forest/15 pt-4 text-[0.7rem] font-medium text-forest"
              >
                How counselling works
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STORY_LIST = [
  { icon: MessageCircle, label: "Counsellor conversations" },
  { icon: ShieldCheck, label: "Trauma-informed care" },
  { icon: Sparkles, label: "Care that fits your pace" },
];

export function StorySplit() {
  return (
    <section id="resources" className="border-b border-border bg-ivory">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-2">
        <div className="min-h-[300px] lg:min-h-[560px]">
          <img
            src={storyImage}
            alt="A counsellor and a student talking over open notebooks at a table"
            width={1200}
            height={1104}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <Reveal className="flex flex-col justify-center bg-card px-5 py-14 sm:px-12 lg:py-20">
          <Eyebrow>Why every session counts</Eyebrow>
          <h2 className="mt-7 max-w-[18ch] font-display text-[2rem] leading-[1.1] text-forest sm:text-[2.7rem]">
            Behind &ldquo;I&rsquo;m fine&rdquo; there is often a story.
          </h2>
          <p className="mt-7 max-w-[52ch] text-[0.82rem] leading-relaxed text-muted-foreground">
            A student who stops attending class, a parent who no longer knows how to reach them, a
            couple who speak but never quite feel heard — these are not failures. They are signals.
          </p>
          <p className="mt-4 max-w-[52ch] text-[0.82rem] leading-relaxed text-muted-foreground">
            With Tender, a story is not something that has to be carried alone. It is something that
            can be understood, and slowly, gently, rewritten.
          </p>

          <ul className="mt-10 space-y-4">
            {STORY_LIST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 border-b border-border/70 pb-4 text-[0.78rem] text-foreground/80"
              >
                <Icon className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "We listen", body: "Begin with what feels most important today. There is no need to rehearse or perform." },
  {
    n: "02",
    title: "We understand",
    body: "Together we look at patterns, pressures and people around you, and what they are asking of you.",
  },
  {
    n: "03",
    title: "We move forward",
    body: "A practical, compassionate plan that fits your pace and your life — reviewed as you go.",
  },
];

export function ProcessDark() {
  return (
    <section className="bg-forest-deep text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow tone="light">A gentle, guided beginning</Eyebrow>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="max-w-[20ch] font-display text-[2.1rem] leading-[1.1] sm:text-[3rem]">
              What happens when you begin?
            </h2>
            <p className="max-w-[40ch] text-[0.78rem] leading-relaxed text-ivory/60 lg:ml-auto">
              No step is rushed and nothing is decided for you. This is how the first few
              conversations usually unfold.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 border-t border-ivory/15">
          {STEPS.map(({ n, title, body }) => (
            <Reveal
              as="li"
              key={n}
              className="grid gap-3 border-b border-ivory/15 py-8 sm:grid-cols-[4rem_1fr] lg:py-10"
            >
              <span className="text-[0.7rem] text-ivory/40">{n}</span>
              <div>
                <h3 className="font-display text-[1.4rem] sm:text-[1.7rem]">{title}</h3>
                <p className="mt-3 max-w-[60ch] text-[0.78rem] leading-relaxed text-ivory/60">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "See the person",
    body: "Never only a symptom. We start with who you are, your context and what matters to you.",
  },
  {
    title: "Protect trust",
    body: "Everything you share stays confidential. Boundaries are explained clearly, from the first session.",
  },
  {
    title: "Build agency",
    body: "Care that helps you make your own choices — support, not dependence, is the goal.",
  },
];

export function CareValues() {
  return (
    <section id="services" className="border-b border-border bg-beige">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <Eyebrow>Our approach</Eyebrow>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.35fr]">
            <h2 className="max-w-[14ch] font-display text-[2rem] leading-[1.1] text-forest sm:text-[2.7rem]">
              Care with dignity at the centre.
            </h2>
            <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0">
              {VALUES.map(({ title, body }, i) => (
                <li key={title} className={`sm:px-7 ${i > 0 ? "sm:border-l sm:border-forest/15" : "sm:pl-0"}`}>
                  <h3 className="font-display text-[1.25rem] leading-snug text-forest">{title}</h3>
                  <p className="mt-4 text-[0.75rem] leading-relaxed text-foreground/70">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="book" className="bg-terracotta text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow tone="light">Whenever you are ready</Eyebrow>
          <h2 className="mx-auto mt-8 max-w-[26ch] font-display text-[2.2rem] leading-[1.12] sm:text-[3.1rem] lg:text-[3.6rem]">
            A difficult chapter does not have to become the whole story.
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-[0.8rem] leading-relaxed text-ivory/80">
            Start by understanding the kind of support that fits you or your family.
          </p>
          <a
            href="#counselling"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[0.8rem] font-medium text-forest transition-colors hover:bg-ivory/85"
          >
            Find your counselling path <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
