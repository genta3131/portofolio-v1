/** Tentang Saya — bio singkat (tanpa mengulang identitas yang sudah di hero). */
export function AboutIntro() {
  return (
    <section id="tentang" className="mx-auto max-w-[100rem] px-6 pb-16 pt-16">
      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-accent-emerald/20 bg-accent-emerald/10 p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-emerald">
            <path d="m4 17 6-6-6-6" />
            <path d="M12 19h8" />
          </svg>
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Tentang Saya
        </h2>
      </div>

      <div className="mt-8 max-w-4xl space-y-4 text-base leading-relaxed text-foreground">
        <p>
          Fokus saya di pengembangan <strong>backend ekosistem
          Laravel/PHP</strong> — berpengalaman merancang <strong>SimRisk</strong>,
          sistem manajemen risiko skala enterprise untuk lingkungan kampus,
          sembari mengajar informatika di SMA.
        </p>
        <p className="text-muted-foreground">
          Saya terbiasa memaknai persoalan nyata sebagai persoalan sistem: data
          apa yang paling penting, siapa boleh melihat apa, dan bagaimana
          alurnya aman sekaligus mudah dijaga. Prinsip yang sama kembali dipakai
          di kelas — menyederhanakan hal teknis tanpa mengurangi substansinya.
        </p>
      </div>
    </section>
  );
}
