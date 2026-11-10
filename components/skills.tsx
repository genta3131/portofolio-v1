import { BRAND_ICONS, type BrandIcon } from "@/components/tech-icons";

const skills = [
  {
    title: "Backend Development",
    description:
      "Fokus utama: membangun backend dengan ekosistem Laravel/PHP, dari skema database sampai business logic.",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Eloquent"],
    tech: [
      { label: "Laravel", icon: BRAND_ICONS.Laravel },
      { label: "PHP", icon: BRAND_ICONS.PHP },
      { label: "MySQL", icon: BRAND_ICONS.MySQL },
      { label: "Eloquent", mono: "EQ" },
    ],
    span: "md:col-span-2",
  },
  {
    title: "Otorisasi & RBAC",
    description:
      "Otorisasi aplikasi monolitik Laravel: pemetaan role dan permission dengan RBAC Spatie, dilindungi lewat middleware.",
    stack: ["Spatie RBAC", "Laravel Middleware", "Gates & Policies", "Role Management"],
    tech: [
      { label: "Spatie RBAC", mono: "RB" },
      { label: "Middleware", mono: "MW" },
      { label: "Gates & Policies", mono: "GP" },
      { label: "Role Management", mono: "RL" },
    ],
    span: "",
  },
  {
    title: "Frontend & UI",
    description:
      "Membangun antarmuka yang menyatu dengan backend: komponen React dan styling Tailwind.",
    stack: ["React 19", "TypeScript", "Inertia.js", "Tailwind CSS"],
    tech: [
      { label: "React", icon: BRAND_ICONS.React },
      { label: "TypeScript", icon: BRAND_ICONS.TypeScript },
      { label: "Inertia.js", icon: BRAND_ICONS.Inertiajs },
      { label: "Tailwind", icon: BRAND_ICONS.TailwindCSS },
    ],
    span: "",
  },
  {
    title: "Tooling & Kolaborasi",
    description:
      "Terbiasa bekerja dengan Git: version control, riwayat perubahan rapi, dan dokumentasi proyek.",
    stack: ["Git", "GitHub", "Dokumentasi"],
    tech: [
      { label: "Git", icon: BRAND_ICONS.Git },
      { label: "GitHub", icon: BRAND_ICONS.GitHub, light: true },
      { label: "Dokumentasi", mono: "DO" },
    ],
    span: "",
  },
  {
    title: "Komunikasi Teknis",
    description:
      "Terbiasa menjelaskan materi teknis ke audiens awal, dari ruang kelas sampai dokumentasi proyek.",
    stack: ["Mengajar", "Public speaking", "Dokumentasi"],
    tech: [
      { label: "Mengajar", mono: "TR" },
      { label: "Public speaking", mono: "PS" },
      { label: "Dokumentasi", mono: "DO" },
    ],
    span: "",
  },
];

type Tech = { label: string; icon?: BrandIcon; mono?: string; light?: boolean };

/** Tile ikon brand berwarna di atas permukaan gelap; tanpa logo resmi → monogram. */
function TechTile({ t }: { t: Tech }) {
  if (!t.icon) {
    return (
      <li
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-card font-mono text-xs font-medium text-accent-emerald"
        title={t.label}
      >
        {t.mono}
      </li>
    );
  }
  // GitHub hitam tak terbaca di tile gelap → pakai token foreground terang.
  const color = t.light ? "var(--dark-foreground)" : `#${t.icon.hex}`;
  return (
    <li
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-card"
      title={t.label}
    >
      <svg
        role="img"
        aria-label={t.label}
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill={color}
      >
        <title>{t.label}</title>
        <path d={t.icon.path} />
      </svg>
    </li>
  );
}

/** Keahlian: bento + kartu; ikon brand (di-vendor) di tile gelap. */
export function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-[100rem] px-6 pb-16 pt-16">
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
              {s.tech.map((t) => (
                <TechTile key={t.label} t={t} />
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
      </div>
    </section>
  );
}
