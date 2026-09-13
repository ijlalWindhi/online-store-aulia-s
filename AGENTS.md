# Repository Instructions

## Project

This repository contains the Astro website for Auliaâ€™s åº—. The site is a bilingual static storefront for creative digital services.

`PRD.md` is the product source of truth. Read it completely before planning, editing, reviewing, or testing the website. Do not modify `PRD.md` unless the user explicitly asks for a requirements change.

## Instruction Priority

Apply instructions in this order:

1. The userâ€™s current request.
2. This `AGENTS.md`.
3. `PRD.md`.
4. Existing repository conventions.

If a real conflict remains after reading the files, explain the conflict and ask one focused question. Do not invent a requirement.

## Required Working Mode

- Apply antislop during planning, copywriting, UI design, implementation, and review.
- When the skills are available, load `antislop`, `antislop-ui`, `antislop-copywriting`, `antislop-human`, and `antislop-layoutmobile`.
- Use `ponytail` in full mode for all implementation decisions.
- Prefer the smallest native Astro, HTML, CSS, and JavaScript solution that satisfies `PRD.md`.
- Accessibility, security, validation, error handling, and responsive behavior are never optional simplifications.

## Architecture Constraints

- Build a static Astro site. Do not introduce SSR, serverless functions, a backend, a database, a CMS, authentication, a cart, or online payments.
- Preserve the package manager and conventions already present in the repository.
- If Astro has not been initialized, create the smallest Astro project in place without deleting `PRD.md`, `AGENTS.md`, or user files.
- Prefer Astro components, semantic HTML, CSS, and minimal vanilla JavaScript.
- Do not add React, Vue, Svelte, Tailwind, a component library, an icon library, an animation library, or an i18n dependency unless the repository already depends on it and reuse is clearly smaller.
- Centralize repeated service, price, contact, route, and translation data. Do not duplicate business data across pages.
- Create a component only when markup or behavior is genuinely reused. Avoid speculative abstractions and one-use wrappers.
- Keep client-side JavaScript limited to interactions that need it, such as the mobile menu, Experience submenu, and language navigation.

## Content Rules

- Use only facts, prices, contact details, policies, and interview findings provided by `PRD.md`.
- Never fabricate customers, testimonials, statistics, certifications, performance claims, partner logos, team members, addresses, or portfolio history.
- Present every simulated portfolio item prominently as `Concept Project` in both list and detail contexts.
- Use first-person singular language for Aulia. Do not imply that Auliaâ€™s åº— has a team.
- Keep Auliaâ€™s åº— unchanged in both languages. Preserve the Mandarin character åº—.
- Bahasa Indonesia is the default language. English pages use the `/en/` prefix and must contain complete English copy.
- UI copy must not contain the em dash character.
- Avoid generic marketing claims, decorative emoji, empty buzzwords, and generic calls to action.
- Use specific CTA labels such as `Pesan lewat WhatsApp` and `Order via WhatsApp`.

## Visual and Asset Rules

- Follow the approved Modern Mandarin direction, palette, typography, and design dials in `PRD.md`.
- Treat the approved logo brief in `PRD.md` as authorization to create a code-native wordmark and åº— mark. Provide accessible SVG or semantic HTML versions, a favicon, and a one-color variant.
- Create original code-native SVG or CSS visuals for the three Concept Projects. Do not use copyrighted brand assets or pretend the concepts are real clients.
- Do not create or display a profile photo of Aulia.
- Keep one clear focal point per screen and use vermilion as a deliberate accent, not on every element.
- Do not use a generic hero plus identical card-grid template, bento layouts, decorative grids, glassmorphism, fake statistics, or fake testimonials.
- Use motion only for useful interaction feedback. Respect `prefers-reduced-motion`.
- The fixed light theme is intentional. Do not add dark mode.

## Functional Requirements

- Implement every Indonesian and English route listed in `PRD.md`.
- Every navigation item must have a real destination.
- The Experience submenu must work with pointer, touch, and keyboard input and close with Escape.
- The mobile navigation must use a visible `Menu` label and must not depend on hover.
- The language switcher must open the equivalent page in the other language.
- Every service and package CTA must open the approved WhatsApp number with the correct encoded language, service, package, and starting price.
- Keep the visible WhatsApp number, email, and Instagram link available as fallbacks.
- Provide a useful bilingual 404 page.

## Accessibility and Responsive Requirements

- Maintain the contrast ratios approved in `PRD.md`.
- Use semantic landmarks and a logical heading structure.
- Add a working skip link.
- Every interactive element must be keyboard accessible and have a visible `:focus-visible` style.
- Touch targets must be at least 44 by 44 CSS pixels.
- Images need meaningful `alt` text, or empty `alt` text when decorative.
- The layout must reflow without horizontal overflow across narrow mobile, tablet, laptop, and desktop widths.
- Verify that content remains usable at 200 percent zoom.

## SEO and Privacy

- Add unique title and description metadata for every page and language.
- Add canonical URLs, reciprocal `hreflang`, an XML sitemap, `robots.txt`, and relevant Open Graph metadata using only real assets.
- Do not add analytics, marketing cookies, forms, or third-party trackers.
- Do not expose credentials, private addresses, or other personal data.

## Verification

Before declaring completion:

1. Run the existing formatter, lint, type-check, and test scripts when present.
2. Run the Astro production build.
3. Start a local preview and check every page in both languages.
4. Click every navigation item, submenu, language switcher, contact link, and WhatsApp CTA.
5. Confirm every WhatsApp message contains the correct recipient and service data.
6. Check keyboard navigation, Escape behavior, visible focus, mobile navigation, narrow widths, and 200 percent zoom.
7. Check the browser console for errors.
8. Search rendered copy for fabricated claims, missing Concept Project labels, untranslated text, dead links, and em dash characters.

Report the commands run and an element-by-element click-through result. Do not claim a check passed if it was not executed.

## Change Safety

- Inspect `git status` before editing and preserve unrelated user changes.
- Do not delete or overwrite user files.
- Do not use destructive Git commands.
- Do not commit, push, connect external services, modify DNS, or deploy unless the user explicitly requests it.
