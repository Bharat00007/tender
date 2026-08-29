import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const title = "TENDER Counselling | A Safe Space to Be Heard";
const description =
  "Academic, mental health, relationship and health counselling for students, individuals, couples and families.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function RegistrationForm({ idPrefix }: { idPrefix: string }) {
  return (
    <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
      <h3>Register for Counselling</h3>
      <p>Take the first step towards feeling better.</p>
      <div className="form-group">
        <label htmlFor={`${idPrefix}-name`}>Name</label>
        <input type="text" id={`${idPrefix}-name`} required placeholder="Your full name" />
      </div>
      <div className="form-group">
        <label htmlFor={`${idPrefix}-email`}>Email</label>
        <input type="email" id={`${idPrefix}-email`} required placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor={`${idPrefix}-phone`}>Phone Number</label>
        <input type="tel" id={`${idPrefix}-phone`} required placeholder="+91 00000 00000" />
      </div>
      <button type="submit" className="button button-primary">Submit Registration</button>
    </form>
  );
}

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasClosedModal, setHasClosedModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosedModal) {
        setIsModalOpen(true);
      }
    }, 25000);
    return () => clearTimeout(timer);
  }, [hasClosedModal]);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setIsModalOpen(false); setHasClosedModal(true); }} aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <RegistrationForm idPrefix="modal" />
          </div>
        </div>
      )}
      <main>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="TENDER home">
            <span className="brand-mark" aria-hidden="true">
              <span></span>
            </span>
            <span className="brand-name">TENDER</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">Why TENDER</a>
            <a href="#support">Our support</a>
            <a href="#approach">How it works</a>
            <a href="#answers">Questions</a>
          </nav>
          <a className="nav-cta" href="#support">
            Find your support{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-right"
              aria-hidden="true"
            >
              <path d="m7 7 10 10"></path>
              <path d="M17 7v10H7"></path>
            </svg>
          </a>
        </header>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-visual">
            <img
              src="/images/real-child-mental-health.jpg"
              alt="A distressed young child covering her ears during a family counselling conversation"
            />
            <div className="image-note">
              <span aria-hidden="true">T</span>
              <p>Behaviour is often a child&#x27;s way of communicating an unmet emotional need.</p>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TENDER · Counselling for real life</p>
            <h1 id="hero-title">
              India&#x27;s Integrated Counselling Platform for{" "}
              <em>Stronger Minds, Brighter Futures and Healthier Relationships.</em>
            </h1>
            <p className="hero-description">
              One connected space supporting children, students, parents, teachers, individuals and
              families across academic, emotional, health and relationship needs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#support">
                Explore counselling{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a className="text-link" href="#about">
                Understand TENDER
              </a>
            </div>
            <div className="trust-line" aria-label="Our counselling values">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>{" "}
                Confidential
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-handshake"
                  aria-hidden="true"
                >
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
                </svg>{" "}
                Non-judgemental
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>{" "}
                Person-centred
              </span>
            </div>
          </div>
        </section>
        <section className="manifesto" id="about" aria-labelledby="about-title">
          <p className="section-kicker">What TENDER means</p>
          <h2 id="about-title">
            Transforming <em>Emotions</em>
            <br />
            Nurturing <em>Development</em>
            <br />
            Empowering <em>Relationships</em>
          </h2>
          <div className="manifesto-copy">
            <p>
              Life rarely fits into one box. Academic pressure can affect mental health. Health
              concerns can strain relationships. Family conflict can change how a young person
              studies, sleeps and sees themselves.
            </p>
            <p>
              TENDER connects these realities. We begin with the whole person—not a label—and work
              towards understanding, resilience and healthier relationships.
            </p>
          </div>
        </section>
        <section className="support-section" id="support" aria-labelledby="support-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How we support you</p>
              <h2 id="support-title">One life. Many layers of care.</h2>
            </div>
            <p>
              Choose the concern closest to what you are experiencing. You do not need to have the
              perfect words before you begin.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card sage">
              <div className="card-top">
                <span>01</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open"
                  aria-hidden="true"
                >
                  <path d="M12 5v16"></path>
                  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                </svg>
              </div>
              <h3>Academic Counselling</h3>
              <p>
                Clarity for subject choices, study habits, exam stress, career pathways and the
                difficult conversations that surround them.
              </p>
              <a href="#approach" aria-label="Learn how academic counselling works">
                How counselling works{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </article>
            <article className="service-card rose">
              <div className="card-top">
                <span>02</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-brain"
                  aria-hidden="true"
                >
                  <path d="M12 18V5"></path>
                  <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                  <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                  <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                  <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                  <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                  <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                  <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                </svg>
              </div>
              <h3>Mental Health Counselling</h3>
              <p>
                A confidential, non-judgemental space to understand anxiety, low mood, overwhelm,
                self-esteem and emotional patterns.
              </p>
              <a href="#approach" aria-label="Learn how mental health counselling works">
                How counselling works{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </article>
            <article className="service-card sand">
              <div className="card-top">
                <span>03</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-handshake"
                  aria-hidden="true"
                >
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
                </svg>
              </div>
              <h3>Relationship Counselling</h3>
              <p>
                Support for couples, parents, teenagers and families to listen better, repair trust
                and move through conflict with care.
              </p>
              <a href="#approach" aria-label="Learn how relationship counselling works">
                How counselling works{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </article>
            <article className="service-card blue">
              <div className="card-top">
                <span>04</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-stethoscope"
                  aria-hidden="true"
                >
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h3>Health Counselling</h3>
              <p>
                Compassionate guidance for coping with diagnosis, lifestyle change, caregiver strain
                and the emotional side of health.
              </p>
              <a href="#approach" aria-label="Learn how health counselling works">
                How counselling works{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </article>
          </div>
        </section>
        <section className="story-section" aria-labelledby="story-title">
          <div className="story-image">
            <img
              src="/images/real-teacher-student-support.jpg"
              alt="A teacher speaking with two school-age children experiencing a difficult situation"
            />
          </div>
          <div className="story-copy">
            <p className="section-kicker">For every turning point</p>
            <h2 id="story-title">Behind “I&#x27;m fine” there is often a story.</h2>
            <p>
              A student who cannot focus. A parent who is trying too hard to help. A couple speaking
              but no longer feeling heard. A diagnosis that has changed the rhythm of a family.
            </p>
            <p>
              TENDER creates space for the story beneath the symptom—so the next step is guided by
              understanding, not pressure.
            </p>
            <div className="story-audiences" aria-label="People we support">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>{" "}
                Children &amp; teenagers
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>{" "}
                Parents &amp; families
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>{" "}
                Individuals &amp; couples
              </span>
            </div>
          </div>
        </section>
        <section className="family-section" aria-labelledby="family-title">
          <div className="family-copy">
            <p className="section-kicker">From early childhood to age 16</p>
            <h2 id="family-title">Every age. One connected circle of care.</h2>
            <p>
              Emotional needs change as children grow. TENDER connects parents, teachers and
              counsellors so children receive consistent support at home, at school and through
              every developmental transition.
            </p>
            <div className="family-tags" aria-label="Connected support network">
              <span>Child at the centre</span>
              <span>Parent</span>
              <span>Teacher</span>
              <span>Counsellor</span>
            </div>
          </div>
          <div className="age-care-grid" aria-label="Counselling support across childhood stages">
            <figure>
              <img
                src="/images/real-family-child-therapy.jpg"
                alt="A young child with her parents speaking to a counsellor"
              />
              <figcaption>
                <strong>Early years</strong>
                <span>Ages 4–7 · emotions, behaviour and safety</span>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/images/real-teacher-student-support.jpg"
                alt="School-age children in conversation with a teacher"
              />
              <figcaption>
                <strong>Growing years</strong>
                <span>Ages 8–12 · school, confidence and friendships</span>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/images/real-teen-counselling.jpg"
                alt="A teenager and parent speaking with a counsellor"
              />
              <figcaption>
                <strong>Teen years</strong>
                <span>Ages 13–16 · identity, pressure and relationships</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-heading light">
            <div>
              <p className="section-kicker">A gentle, clear process</p>
              <h2 id="approach-title">What happens when you begin?</h2>
            </div>
            <p>
              You stay informed and involved. Counselling is something we do with you, never to you.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>We listen</h3>
                <p>
                  Begin with what feels most important today. There is no need to prepare or
                  perform.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>We understand</h3>
                <p>
                  Together, we notice patterns, needs, pressures and the strengths already present.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>We move forward</h3>
                <p>Agree on practical, compassionate steps that fit your situation and pace.</p>
              </div>
            </li>
          </ol>
        </section>
        <section className="principles" aria-labelledby="principles-title">
          <div>
            <p className="section-kicker">Our promise</p>
            <h2 id="principles-title">Care with dignity at the centre.</h2>
          </div>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>See the person</h3>
              <p>
                We look beyond labels, marks, conflict and symptoms to understand the whole person.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Protect trust</h3>
              <p>
                We explain privacy, consent and professional boundaries clearly from the beginning.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Build agency</h3>
              <p>
                Our role is not to make decisions for you, but to help you make them with greater
                clarity.
              </p>
            </article>
          </div>
        </section>
        <section className="faq-section" id="answers" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="section-kicker">Questions, answered simply</p>
            <h2 id="faq-title">Before your first conversation</h2>
            <p>Clear answers can make asking for support feel a little easier.</p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>
                <span>What is counselling, and how can it help?</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Counselling is a structured conversation with a trained professional. It can help
                you name what you are experiencing, understand patterns, consider choices and take
                realistic next steps without judgement.
              </p>
            </details>
            <details>
              <summary>
                <span>Is counselling only for a crisis?</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                No. People seek counselling for prevention, clarity, relationships, academic
                decisions, stress and personal growth. You do not have to wait until life feels
                unmanageable.
              </p>
            </details>
            <details>
              <summary>
                <span>Can parents and teenagers attend together?</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Yes. Depending on the concern, sessions may include a young person, a parent or the
                family together. The approach is explained clearly so every person feels heard and
                respected.
              </p>
            </details>
            <details>
              <summary>
                <span>Is what I share kept confidential?</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Privacy and dignity are central to counselling. Your counsellor will explain
                confidentiality and its safety-related limits before you begin, including situations
                involving risk of harm.
              </p>
            </details>
          </div>
        </section>
        <section className="closing" aria-labelledby="closing-title">
          <p className="section-kicker">Whenever you are ready</p>
          <h2 id="closing-title">A difficult chapter does not have to become the whole story.</h2>
          <p>Start by understanding the kind of support that fits you or your family.</p>
          <a className="button button-light" href="#support">
            Find your counselling path{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </section>
        <section className="registration-section" id="register">
          <div className="registration-container">
            <RegistrationForm idPrefix="footer" />
          </div>
        </section>
        <footer>
          <div className="footer-brand">
            <a className="brand inverted" href="#top" aria-label="TENDER home">
              <span className="brand-mark" aria-hidden="true">
                <span></span>
              </span>
              <span className="brand-name">TENDER</span>
            </a>
            <p>
              Transforming Emotions.
              <br />
              Nurturing Development.
              <br />
              Empowering Relationships.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <a href="#about">Why TENDER</a>
              <a href="#support">Counselling support</a>
              <a href="#approach">Our approach</a>
              <a href="#answers">FAQs</a>
            </div>
            <div>
              <h3>Support</h3>
              <a href="#support">Academic</a>
              <a href="#support">Mental health</a>
              <a href="#support">Relationships</a>
              <a href="#support">Health</a>
            </div>
          </div>
          <div className="footer-note">
            <p>
              © {/* */}2026{/* */} TENDER. All rights reserved.
              <br />
              Photography: Gustavo Fring, RDNE Stock Project and Vitaly Gariev via Pexels.
            </p>
            <p>
              TENDER is not an emergency service. If someone is in immediate danger, contact local
              emergency services or the nearest hospital.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
