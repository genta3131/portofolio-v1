const experience = [
  {
    role: "Backend Developer Intern",
    org: "PUSTIKOM UNJ",
    period: "2024–2025",
    detail:
      "Merancang dan mengembangkan SimRisk: REST API 30+ endpoint, 22 migrations, RBAC Spatie, serta autentikasi JWT/SSO Microsoft.",
    current: false,
  },
  {
    role: "Guru Informatika (Part-Time)",
    org: "SMA Negeri 53 Jakarta",
    period: "2024–Sekarang",
    detail:
      "Mengajar materi pemrograman dan informatika dasar untuk siswa tingkat lanjut.",
    current: true,
  },
  {
    role: "UI/UX Designer",
    org: "Proyek independen",
    period: "2023",
    detail:
      "Merancang prototipe produk digital, termasuk platform relawan & event.",
    current: false,
  },
];

/** Pengalaman: timeline vertikal seperti v1. */
export function Experience() {
  return (
    <section
      id="pengalaman"
      className="border-y border-border/40 bg-card/50 py-24"
    >
      <div className="mx-auto max-w-[100rem] px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-accent-emerald/20 bg-accent-emerald/10 p-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-emerald">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Pengalaman Kerja
          </h2>
        </div>

        <div className="relative mt-10 max-w-3xl space-y-10">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-border"
          />
          {experience.map((e) => (
            <div key={`${e.org}-${e.period}`} className="relative pl-10">
              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                  e.current
                    ? "border-accent-emerald bg-accent-emerald/30"
                    : "border-border bg-background"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold text-foreground">{e.role}</h3>
                <span
                  className={`rounded-pill border px-3 py-0.5 font-mono text-xs ${
                    e.current
                      ? "border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-foreground">
                {e.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
