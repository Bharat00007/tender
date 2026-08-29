import { Reveal } from "./Reveal";

export function IntroHeading() {
  return (
    <section className="border-b border-border bg-beige/60">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-5 py-5 sm:px-8 sm:py-6 lg:py-7">
        <Reveal className="text-center">
          <h1 className="mx-auto max-w-[52ch] font-display text-[clamp(1.15rem,2.05vw,1.75rem)] leading-[1.3] tracking-[-0.005em] text-forest">
            India&rsquo;s integrated counseling platform for{" "}
            <em className="italic text-terracotta">stronger mind, brighter future,</em>{" "}
            and <em className="italic text-terracotta">healthier relationships.</em>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

