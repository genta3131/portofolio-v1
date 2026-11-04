const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#karya", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

/** Kontak + footer gelap: marquee nama & strip gradient (palet genta). */
export function SiteFooter() {
  return (
    <footer id="kontak" className="relative overflow-hidden border-t border-dark-border/60 bg-dark text-dark-foreground">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 pb-16 pt-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-emerald">
            Kontak
          </p>
          <h2 className="mt-6 max-w-xl font-sans text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight">
            Terbuka untuk peluang kerja dan kolaborasi.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-dark-foreground/70">
            Diskusi soal backend, Laravel, sistem manajemen risiko, atau ajakan
            berguru informatika, kirim email atau sapa lewat GitHub.
          </p>
          <a
            href="mailto:gentaabdi31@gmail.com"
            className="mt-8 inline-block rounded-pill bg-accent-emerald px-6 py-3 text-sm font-medium text-dark transition-colors duration-150 hover:opacity-90"
          >
            gentaabdi31@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-dark-foreground/80 transition-colors duration-150 hover:text-accent-emerald"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dark-foreground/50">
              Sosial
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/genta3131"
                  className="text-sm text-dark-foreground/80 transition-colors duration-150 hover:text-accent-emerald"
                >
                  GitHub <span className="text-dark-foreground/40">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gentaabdi31@gmail.com"
                  className="text-sm text-dark-foreground/80 transition-colors duration-150 hover:text-accent-emerald"
                >
                  Email <span className="text-dark-foreground/40">↗</span>
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-dark-foreground/50">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Marquee nama */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden whitespace-nowrap"
      >
        <div className="marquee-track inline-block">
          {[0, 1].map((half) => (
            <span
              key={half}
              className="font-sans text-[clamp(5rem,13vw,12rem)] font-bold leading-none tracking-tight text-dark-foreground"
            >
              Genta Abdi Fathir&nbsp;·&nbsp;Backend Developer&nbsp;·&nbsp;
              Genta Abdi Fathir&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-6 pb-16 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-dark-foreground/60">
        <p>© 2026 Genta Abdi Fathir</p>
        <p>Dirakit dengan Next.js</p>
      </div>

      {/* Strip gradient (palet: emerald/cyan/putih) */}
      <div className="pointer-events-none relative h-24 overflow-hidden md:h-32" aria-hidden>
        <div className="gradient-strip absolute -inset-x-1/2 top-4 h-full">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #10b981 0px 160px, #34d399 160px 260px, #ecfeff 260px 340px, #35a2ff 340px 500px, #0e7490 500px 620px, #10b981 620px 640px)",
              backgroundSize: "25% 100%",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
