/** Hero dark ala v1: aksen emerald, badge status, avatar.
 *  Mobile: foto di atas (seperti udara si Handoko), teks di bawah. */
import Image from "next/image";
import gentaPng from "../public/genta.webp";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-b border-dark-border/60 bg-dark text-dark-foreground"
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

      <div className="relative mx-auto grid max-w-[100rem] items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-[1.4fr_1fr] md:gap-12 md:pb-20 md:pt-28">
        {/* Foto — pertama di mobile (atas), kanan di desktop */}
        <div className="order-1 justify-self-center md:order-2 md:justify-self-end">
          <Image
            src={gentaPng}
            alt="Genta Abdi Fathir"
            preload
            className="h-40 w-40 rounded-full border-2 border-accent-emerald/30 object-cover md:h-80 md:w-80"
          />
        </div>

        <div className="order-2 md:order-1">
          <p className="font-mono text-sm text-accent-emerald">
            <span className="text-dark-foreground/50">~$</span> whoami
          </p>
          <h1 className="mt-4 font-sans text-[clamp(2.25rem,9vw,5.5rem)] font-bold leading-[1.05] tracking-tight">
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
              href="/CV_GentaAbdiFathir.pdf"
              download="CV_GentaAbdiFathir.pdf"
              className="rounded-pill border border-dark-border px-6 py-3 text-sm text-dark-foreground/80 transition-colors duration-150 hover:text-dark-foreground"
            >
              Unduh CV
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
      </div>
    </section>
  );
}
