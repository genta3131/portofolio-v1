"use client";

import { useActiveSection } from "@/components/use-active-section";

const links = [
  { href: "/#beranda", id: "beranda", label: "Beranda" },
  { href: "#tentang", id: "tentang", label: "Tentang" },
  { href: "#karya", id: "karya", label: "Proyek" },
  { href: "#pengalaman", id: "pengalaman", label: "Pengalaman" },
  { href: "#keahlian", id: "keahlian", label: "Keahlian" },
  { href: "#kontak", id: "kontak", label: "Kontak" },
];

const ids = links.map((l) => l.id);

export function SiteHeader() {
  const [active, setActive] = useActiveSection(ids);

  return (
    /* di mobile disembunyikan — navigasi hanya via dock bawah */
    <header className="fixed inset-x-0 top-4 z-40 hidden md:block">
      <div className="mx-auto flex max-w-[100rem] justify-end">
        <nav className="flex gap-1 rounded-pill border border-dark-border bg-dark-card/95 px-3 py-2">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(l.id)}
                className={`rounded-pill px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-150 ${
                  isActive
                    ? "bg-accent-emerald/10 text-accent-emerald"
                    : "text-dark-foreground/70 hover:bg-dark-card hover:text-accent-emerald"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
