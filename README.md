# porto-v2

Portofolio pribadi Genta Abdi Fathir (Backend Developer). Single-page, bahasa Indonesia.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- Tanpa dep UI/animasi eksternal; konten hardcoded di `components/`

## Menjalankan

```bash
npm run dev
```

Build produksi: `npm run build` lalu `npm run start`.

## Struktur

```
app/             layout, page, tokens (globals.css)
components/      section: site-header, dock, hero, about-intro,
                 works, experience, skills, site-footer
                 motion.tsx (Reveal/ProgressBar), use-active-section.ts
docs/DESIGN.md   refensi desain situs lain (BUIKAN tema proyek ini)
public/          favicon, genta.webp, og.png, CV PDF
```

## Navigasi

Anchor `#beranda` `#karya` `#pengalaman` `#keahlian` `#kontak` + scroll-spy (`useActiveSection`). Dock pill hanya tampil di mobile.
