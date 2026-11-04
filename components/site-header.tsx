const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#karya", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

export function SiteHeader() {
  return (
    /* di mobile disembunyikan — navigasi hanya via dock bawah */
    <header className="fixed inset-x-0 top-4 z-40 hidden md:block">
      <div className="mx-auto flex max-w-[100rem] justify-end">
        <nav className="flex gap-1 rounded-pill border border-dark-border bg-dark-card/95 px-3 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-pill px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-dark-foreground/70 transition-colors duration-150 hover:bg-dark-card hover:text-accent-emerald"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
