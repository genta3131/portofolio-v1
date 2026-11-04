"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "beranda", label: "Beranda", href: "/" },
  { id: "karya", label: "Proyek", href: "#karya" },
  { id: "pengalaman", label: "Pengalaman", href: "#pengalaman" },
  { id: "keahlian", label: "Keahlian", href: "#keahlian" },
  { id: "kontak", label: "Kontak", href: "#kontak" },
];

/** Dock navigasi mengambang ala situs asli, dengan state aktif. */
export function Dock() {
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + window.innerHeight / 2;
      let current = "beranda";
      for (const item of items) {
        if (item.id === "beranda") continue;
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= fromTop) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        current = "kontak";
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1.5 rounded-pill bg-background/90 px-3 py-2 shadow-none outline outline-1 outline-black/10 backdrop-blur-sm">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 ${
                isActive
                  ? "bg-accent-emerald text-dark"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <DockIcon id={item.id} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function DockIcon({ id }: { id: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "beranda":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h5v-6h4v6h5V9.5" />
        </svg>
      );
    case "tentang":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
        </svg>
      );
    case "karya":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
        </svg>
      );
    case "pengalaman":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "keahlian":
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
  }
}
