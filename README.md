# Segura® Homepage — Technical Challenge

This project is a **technical challenge** for reproducing the [Segura®](https://segura.security/) homepage, including all interactive elements and multi-language support.

- **Original Page:** [https://segura.security/](https://segura.security/)
- **Reproduction:** [URL](https://segura-page.vercel.app?_vercel_share=0msedtDQ5vj6PSy1IjBgjNjSYIFoZAEy)
---

## Objective

Reproduce the Segura® homepage with full fidelity to the original design, including:

- Pixel-accurate layout and typography across all screen sizes
- All interactive elements (navigation dropdowns, FAQ accordion, etc.)
- Multi-language support in **English (EN)** and **Portuguese (PT)**
- Full navigation menu with all dropdown panels

---

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Next-Intl** for i18n translations (EN, PT-BR)

---

## Project Structure

```
src/
├── app/
│   └── [locale]/          # Locale-based routing (en, pt)
│       └── homepage/
│           └── sections/  # One folder per homepage section
├── components/
│   ├── layout/
│   │   ├── header/        # Header, Banner, Menu, NavItem
│   │   │   └── navMenu/
│   │   │       └── dropdowns/  # One file per nav dropdown
│   │   └── footer/
│   └── ui/                # Reusable components (Button, Accordion, etc.)
├── assets/                # Images, SVGs
└── messages/              # en.json, pt-br.json translation files
```

---

## Main Challenges

- **Full navigation menu reproduction** — The original menu uses CSS `group-hover` for desktop and required an additional click-based toggle for mobile touch support, both running simultaneously without conflict.
- **Dropdown architecture** — Six distinct dropdown panels with different layouts, all driven by a single generic `DROPDOWNS` map to keep `Header.tsx` clean and scalable.
- **Responsive layout** — Several sections required significant restructuring between mobile and desktop (e.g. video/text order swap, hero banner font scaling, three-column grid adaptations).
- **Multi-language support** — All content including dropdown menus, FAQ, stats, and CTAs fully translated and structured in `next-intl` message files.
- **Interactive elements** — FAQ accordion, language switcher with outside-click dismissal, and mobile menu all required careful state management to avoid conflicting behaviours.

---

## Room for Improvement

- Not 100% "pixel-perfect". There are some sections of the page that still need improvement.
- Responsivity could be better, adding more breakpoints or adjusting sections styles.
- The FAQ items are not keyboard focusable
- Most of the icons are approximations.

---

## Bugs & Concerns Found in the Original Site

The following issues were observed on the original [segura.security](https://segura.security/) website during the development of this technical test:

- **"Why Segura" section** — "Watch demo" button has the same color as the background.
- **"Compliance" section** — "See Compliance Made Simple" button has the same color as the background. Icons same color as the buttons on hover.
- **FAQ section in Portuguese** — The FAQ section does not display at all when the site is viewed in PT.
- **"Badges" section** — "Nós o usamos diariamente e **nós somos** certeza de que nossa..." typo(?).
- **"All-In_One"** — Inconsistent spelling formatting in PT version of "The Complete Identity Security Platform" section.
- **"Gartner report" section** — The subtitle of the section has different colors depending on the language.
- **Mobile nav dropdown clipping** — On some mobile devices, the nav dropdown content cuts off the section title.
- **Sticky dropdown bug** — Intermittently, a dropdown panel on the menu does not close and overlaps the next dropdown that is opened.

---

## How to Run

Requires **Node.js 22+**. If you use `nvm`:

```bash
nvm use 22
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
