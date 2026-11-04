const works = [
  {
    kind: "Case Study",
    title: "SimRisk: Sistem Manajemen Risiko",
    description:
      "Platform manajemen risiko skala enterprise untuk Universitas Negeri Jakarta: identifikasi, penilaian, dan pemantauan risiko unit kerja. Dibangun dengan Laravel 12 dan REST API.",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "MySQL",
      "REST API",
      "Spatie RBAC",
      "JWT/SSO Microsoft",
    ],
    stats: [
      { label: "REST endpoints", value: "30+" },
      { label: "Migrations", value: "22" },
    ],
    cta: "Kunjungi repo",
    href: "https://github.com/genta3131",
  },
  {
    kind: "Prototype · UI/UX",
    title: "Platform Relawan & Event",
    description:
      "Desain prototipe platform untuk pengelolaan relawan dan event: pendaftaran penugasan, kehadiran, dan koordinasi jadwal antarunit.",
    stack: ["Figma", "UI/UX", "Design System"],
    cta: "Lihat prototype",
    href: "#kontak",
  },
];

export function Works() {
  return (
    <section id="karya" className="mx-auto max-w-[100rem] px-6 py-16">
      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-accent-emerald/20 bg-accent-emerald/10 p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-emerald">
            <path d="m8 7-5 5 5 5 8-10 8 5-5 5-3-3" />
          </svg>
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Proyek
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {works.map((w, i) => (
          <article
            key={w.title}
            className={`flex flex-col rounded-card border border-border bg-card p-8 hover:border-accent-emerald/50 ${
              i === 0 ? "border-2 border-accent-emerald/20 md:col-span-2" : ""
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {w.kind}
            </span>
            <h3 className="mt-4 text-xl font-bold text-foreground md:text-2xl">
              {w.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {w.description}
            </p>
            {"stats" in w && w.stats && (
              <div className="mt-6 flex gap-8 border-y border-border py-4">
                {w.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-mono text-2xl font-bold text-accent-emerald">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            <ul className="mt-6 flex flex-wrap gap-2">
              {w.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-pill border border-border px-3 py-1 font-mono text-xs text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={w.href}
              className="mt-auto inline-block w-fit pt-8 text-sm font-medium text-accent-emerald hover:underline"
            >
              {w.cta} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
