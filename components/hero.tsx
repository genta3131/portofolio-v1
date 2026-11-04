/** Hero dark ala v1: aksen emerald, badge status, avatar. */
export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-dark text-dark-foreground"
    >
      {/* grid halus ala dev, tanpa glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--dark-border) 1px, transparent 1px), linear-gradient(90deg, var(--dark-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-[100rem] items-center gap-12 px-6 pb-28 pt-36 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent-emerald">
            <span className="text-dark-foreground/50">~$</span> whoami
          </p>
          <h1 className="mt-4 font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight">
            Genta Abdi Fathir
          </h1>
          <p className="mt-2 font-mono text-sm text-dark-foreground/60">
            Backend Developer | Fresh Graduate
          </p>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-dark-foreground/80">
            Membangun sistem backend yang skalabel, aman, dan efisien.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#karya"
              className="rounded-pill bg-accent-emerald px-6 py-3 text-sm font-medium text-dark transition-colors duration-150 hover:opacity-90"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="rounded-pill border border-dark-border px-6 py-3 text-sm text-dark-foreground/80 transition-colors duration-150 hover:text-dark-foreground"
            >
              Unduh Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-emerald" />
              Available for work
            </span>
            <span className="font-mono text-dark-foreground/50">
              Jakarta, Indonesia
            </span>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <img
            src="/genta.png"
            alt="Genta Abdi Fathir"
            className="h-64 w-64 rounded-full border-2 border-accent-emerald/30 object-cover md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
