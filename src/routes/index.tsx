import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { IntroHeading } from "@/components/landing/IntroHeading";
import { Hero } from "@/components/landing/Hero";
import {
  BrandStatement,
  Categories,
  StorySplit,
  ProcessDark,
  CareValues,
  FinalCta,
} from "@/components/landing/Sections";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const title = "Tendor — India's Integrated Counselling Platform";
const description =
  "Therapy-first, confidential counselling for students, individuals, couples and families across academic, mental health, relationship and health care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <IntroHeading />
        <Hero />
        <BrandStatement />
        <Categories />
        <StorySplit />
        <ProcessDark />
        <CareValues />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
