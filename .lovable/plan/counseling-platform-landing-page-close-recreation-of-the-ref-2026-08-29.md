# Counseling platform landing page — close recreation of the reference

A single-page site rebuilt at `/` (replacing the placeholder), matching the uploaded screenshot section-by-section, with four intentional changes: new hero heading, new imagery, new premium wellness palette, new text logo.

## Brand

Text-only wordmark: **SAHAJ** with a small leaf-dot mark, uppercase, letter-spaced, same size/position/weight as the reference logo (top-left of header, and again in the footer).

## Palette (replaces reference colors, same relationships)

- Page background: warm ivory `#FAF7F1`
- Alternate band background: warm beige `#F1EBE0`
- Dark section / footer: deep forest green `#16281F`
- Primary accent (italic display words, links, dark buttons): forest green `#1F3B2C`
- Secondary accent (final CTA band, italic emphasis): muted terracotta `#B4614A`
- Card tints: sage, blush-terracotta, sand, pale mint (four cards, as in the reference)
- Body text: charcoal-green `#25302A`; muted text at 65% opacity

## Typography

- Display: an editorial serif (Instrument Serif / Fraunces-style) for all large headings, italic for emphasized words exactly where the reference italicizes them.
- Body/UI: clean grotesque sans (DM Sans / Manrope) for eyebrows (uppercase, tracked, tiny), body copy, nav, buttons.

## Sections (order and structure preserved)

1. **Header** — logo left; centered nav (Why TENDER→Why SAHAJ, Counselling, Resources, Services); right link "Book a session →". Same height/spacing. Mobile: hamburger with clean slide-down panel.
2. **Hero** — two columns, ivory left / image right (full-bleed to the right edge, same aspect and vertical extent). Left: eyebrow, new H1 "India's integrated counseling platform for stronger mind, brighter future, and healthier relationships." at a slightly reduced serif size with balanced line breaks to hold the same block proportions; supporting paragraph; dark pill primary CTA + underlined secondary link; a row of three small icon+label trust items beneath. A small quote card overlaps the image's bottom-right corner, as in the reference.
3. **Brand statement** — eyebrow, then three-line serif headline with alternating italic accent words (Transforming *Emotions* / Nurturing *Development* / Empowering *Relationships*), and two small body columns aligned to the right half below.
4. **Categories** — eyebrow, left serif heading "One life. Many layers of care." with a short paragraph on the right; below, four equal tinted cards (Academic, Mental Health, Relationship, Health Counselling) each with an outline icon top-right, title, short description, and a "How counselling works →" link on a divider. Subtle hover lift. Mobile: 1–2 column stack.
5. **Story split** — left image (near-square, flush left), right white panel with eyebrow, serif heading with quoted text, two paragraphs, and a three-item icon list.
6. **Dark "What happens when you begin?"** — forest-green full-bleed band, eyebrow, large serif heading left, small paragraph right; three numbered rows (We listen / We understand / We move forward) separated by hairline dividers.
7. **Care with dignity at the centre** — beige band, large serif heading left, three text columns right (See the person / Protect trust / Build agency) with vertical hairline separators.
8. **FAQ** — "Before your first conversation" heading + note on the left; accordion on the right, all closed by default, plus/minus indicator, smooth height animation, hairline dividers; first item content as in the reference.
9. **Final CTA** — full-width terracotta band, centered serif headline, supporting line, light pill button.
10. **Footer** — dark green: logo + three-line descriptor left, two link columns right, bottom legal row with copyright and small links.

## Images

Four new generated photographs, matching the reference crops and visual weight: hero counseling conversation (portrait-ish, right column), student + counselor at a desk (story section), and any smaller inset needed. Authentic Indian people and interiors, warm natural light, matching the palette. No reference images reused.

## Motion

Smooth scrolling, one gentle fade-and-rise reveal per section on scroll, soft button and card hover transitions, animated accordion, gentle image fade-in. Nothing else.

## Technical notes

- Palette and fonts become semantic tokens in `src/styles.css` (`@theme inline` + `:root`); no hardcoded color classes in components.
- Page built in `src/routes/index.tsx` composed from small components under `src/components/landing/` (Header, Hero, BrandStatement, Categories, StorySplit, ProcessDark, CareValues, Faq, FinalCta, Footer).
- Fonts loaded via `<link>` in `src/routes/__root.tsx`; route `head()` gets a unique title/description/OG for the counseling platform.
- Semantic landmarks, single H1, accessible accordion and mobile nav (buttons, `aria-expanded`), alt text on every image, responsive with no horizontal overflow.
