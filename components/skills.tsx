const skills = [
  {
    title: "Backend Development",
    description:
      "Fokus utama: membangun backend dengan ekosistem Laravel/PHP, dari skema database sampai business logic.",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Eloquent"],
    tiles: ["Lr", "PHP", "DB", "EQ"],
    span: "md:col-span-2",
  },
  {
    title: "API & Keamanan",
    description:
      "REST API 30+ endpoint dengan autentikasi JWT dan SSO Microsoft, akses dikontrol lewat RBAC.",
    stack: ["REST API", "Spatie RBAC", "JWT", "SSO Microsoft"],
    tiles: ["API", "RB", "TK", "SSO"],
    span: "",
  },
  {
    title: "Frontend & UI",
    description:
      "Membangun antarmuka yang menyatu dengan backend: komponen React dan styling Tailwind.",
    stack: ["React 19", "TypeScript", "Inertia.js", "Tailwind CSS"],
    tiles: ["Rc", "TS", "IN", "TW"],
    span: "",
  },
  {
    title: "DevOps & Tooling",
    description:
      "Mengemas aplikasi dengan Docker dan Laravel Sail supaya lingkungan dev konsisten.",
    stack: ["Docker", "Laravel Sail", "Git"],
    tiles: ["DK", "SL", "GT"],
    span: "",
  },
  {
    title: "Komunikasi Teknis",
    description:
      "Terbiasa menjelaskan materi teknis ke audiens awal — dari ruang kelas sampai dokumentasi proyek.",
    stack: ["Mengajar", "Public speaking", "Dokumentasi"],
    tiles: ["TR", "PS", "DO"],
    span: "md:col-span-2",
  },
];

/** Keahlian: bento + kartu monogram, gaya v1 (rounded-lg, border halus). */
export function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-[100rem] px-6 pb-24">
      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-accent-emerald/20 bg-accent-emerald/10 p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-emerald">
            <path d="M16 18 22 12 16 6" />
            <path d="M8 6l-6 6 6 6" />
          </svg>
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Keahlian
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {skills.map((s) => (
          <article
            key={s.title}
            className={`flex flex-col rounded-card border border-border bg-card p-6 hover:border-accent-emerald/50 ${s.span}`}
          >
            <ul className="flex flex-wrap gap-2">
              {s.tiles.map((t) => (
                <li
                  key={t}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-card font-mono text-xs font-medium text-accent-emerald"
                >
                  {t}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-pill border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </article>
        ))}

        {/* Kartu Pendidikan */}
        <article className="flex flex-col rounded-card border border-border bg-card p-6 hover:border-accent-emerald/50">
          <ul className="flex gap-2">
            <li className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-card font-mono text-xs font-medium text-accent-emerald">
              UNJ
            </li>
          </ul>
          <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl">
            S1 Pendidikan Informatika
          </h3>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Universitas Negeri Jakarta · 2020–2025
          </p>
        </article>
      </div>
    </section>
  );
}
