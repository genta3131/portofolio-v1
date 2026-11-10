# naufalsuhandoko DESIGN.md

> Result: this document describes the REFERENCE site (naufalsuhandoko), NOT this project's actual theme. This project uses emerald accent (#10b981-ish tokens) + Geist fonts — see `app/globals.css`. Do NOT copy the #ffe02a / Instrument Sans values here into this project.

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 6
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: yes · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![naufalsuhandoko Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography pairs **Instrument Sans** for display/headings with **Roboto** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 4, 8, 12, 16, 20, 24, 28, 32px. The accent color **#ffe02a** anchors interactive elements (buttons, links, focus rings). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| theme-color | `#f1f0ec` | surface | Card and panel backgrounds |
| color-black | `#000000` | text-primary | Headings and body text |
| muted-foreground | `#737373` | text-muted | Captions, placeholders, secondary info |
| ring | `#a1a1a1` | text-muted | Captions, placeholders, secondary info |
| chart-5 | `#2a2a28` | border | Dividers, card borders, outlines |
| color-yellow-300 | `#ffe02a` | accent | CTAs, links, focus rings, active states |
| destructive | `#e40014` | danger | Error states, destructive actions |
| color-yellow-400 | `#fac800` | warning | Warning states, caution indicators |
| info | `#3a35f0` | info | Informational highlights |
| color-ink | `#0b0b0b` | unknown | Palette color |
| primary | `#171717` | unknown | Palette color |
| chart-1 | `#d6d5cd` | unknown | Palette color |
| border | `#e7e6e0` | unknown | Palette color |
| color-ash | `#83837c` | unknown | Palette color |
| chart-3 | `#525252` | unknown | Palette color |
| chart-4 | `#404040` | unknown | Palette color |
| unknown | `#4a4a46` | unknown | Palette color |
| destructive | `#ff6568` | unknown | Palette color |
| sidebar-primary | `#1447e6` | unknown | Palette color |

### Dark Mode Token Mapping

| Variable | Light | Dark |
|---|---|---|
| `--background` | `#f1f0ec` | `lab(2.75381% 0 0)` |
| `--foreground` | `#0b0b0b` | `lab(98.26% 0 0)` |
| `--card` | `lab(100% 0 0)` | `lab(7.78201% -.0000149012 0)` |
| `--card-foreground` | `lab(2.75381% 0 0)` | `lab(98.26% 0 0)` |
| `--popover` | `lab(100% 0 0)` | `lab(7.78201% -.0000149012 0)` |
| `--popover-foreground` | `lab(2.75381% 0 0)` | `lab(98.26% 0 0)` |
| `--primary` | `lab(7.78201% -.0000149012 0)` | `lab(90.952% 0 -.0000119209)` |
| `--primary-foreground` | `lab(98.26% 0 0)` | `lab(7.78201% -.0000149012 0)` |
| `--secondary` | `lab(96.52% -.0000298023 .0000119209)` | `lab(15.204% 0 -.00000596046)` |
| `--secondary-foreground` | `lab(7.78201% -.0000149012 0)` | `lab(98.26% 0 0)` |
| `--muted` | `lab(96.52% -.0000298023 .0000119209)` | `lab(15.204% 0 -.00000596046)` |
| `--muted-foreground` | `lab(48.496% 0 0)` | `lab(66.128% -.0000298023 .0000119209)` |
| `--accent` | `lab(96.52% -.0000298023 .0000119209)` | `lab(15.204% 0 -.00000596046)` |
| `--accent-foreground` | `lab(7.78201% -.0000149012 0)` | `lab(98.26% 0 0)` |
| `--destructive` | `lab(48.4493% 77.4328 61.5452)` | `lab(63.7053% 60.745 31.3109)` |
| `--border` | `lab(90.952% 0 -.0000119209)` | `lab(100% 0 0/.1)` |
| `--input` | `lab(90.952% 0 -.0000119209)` | `lab(100% 0 0/.15)` |
| `--ring` | `lab(66.128% -.0000298023 .0000119209)` | `lab(48.496% 0 0)` |
| `--sidebar` | `lab(98.26% 0 0)` | `lab(7.78201% -.0000149012 0)` |
| `--sidebar-foreground` | `lab(2.75381% 0 0)` | `lab(98.26% 0 0)` |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--foreground: #0b0b0b;
--foreground: #f2f1ec;
--foreground: #f2f1ec;
--background: #f1f0ec;
--foreground: #0b0b0b;
--card: #fff;
--card-foreground: #0a0a0a;
--popover: #fff;
--popover-foreground: #0a0a0a;
--primary: #171717;
--primary-foreground: #fafafa;
--secondary: #f5f5f5;
--secondary-foreground: #171717;
--muted: #f5f5f5;
--muted-foreground: #737373;
--accent: #f5f5f5;
--accent-foreground: #171717;
--destructive: #e40014;
--border: #e5e5e5;
```


---

## 3. Typography Rules

**Font Stack:**
- **Roboto** — Heading 1, Heading 2, Heading 3
- **Instrument Sans** — Body, Caption
- **Geist Mono** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Instrument Sans";
  src: url("https://naufalsuhandoko.vercel.app/_next/static/immutable/media/c7f47671e39f7787-s.3wn_q526zaolu.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Geist Mono";
  src: url("https://naufalsuhandoko.vercel.app/_next/static/immutable/media/5ce348bf30bf5439-s.27spqqad3wyeo.woff2") format("woff2");
  font-weight: 100;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Roboto | clamp(4.5rem,18vw,16rem) | 700 |
| Heading 2 | Roboto | clamp(3.5rem,20vw,15rem) | 700 |
| Heading 3 | Roboto | clamp(2.75rem,13vw,10.5rem) | 700 |
| Body | Instrument Sans | clamp(1.25rem,3.2vw,2.25rem) | 400 |
| Caption | Instrument Sans | .6875rem | 400 |
| Code | Geist Mono | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Roboto** for body/UI text, **Instrument Sans** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Input (1)

**Button** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48
- **Border radius:** 2rem, 3rem
- **Max content width:** 100rem

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

No box-shadow values detected. The design appears to use a flat visual style.

**Z-Index Scale:** `0, 1, 2, 10, 15, 20, 30, 40, 50, 60, 100`


---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffe02a` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Roboto** (body) with **Instrument Sans** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: 2rem, 3rem
- Reuse existing components from Section 4 before creating new ones
- Always use CSS variables for colors — never hardcode hex
- Test both light and dark modes for contrast

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Roboto and Instrument Sans and Geist Mono
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 40rem | css |
| md | 48rem | css |
| lg | 64rem | css |
| xl | 80rem | css |
| 2xl | 96rem | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f1f0ec
Border: 1px solid #2a2a28
Radius: 3rem
Padding: 16px
Font: Roboto
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg #ffe02a, text white
Ghost: bg transparent, border #2a2a28
Padding: 8px 16px
Radius: 3rem
Hover: opacity 0.9 or lighter shade
Focus: ring with #ffe02a
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 100rem, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f1f0ec
Label: #737373 (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #2a2a28
Focus: border-color #ffe02a
Label: #737373 12px
Spacing: 16px between fields
Radius: 3rem
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Roboto, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```
