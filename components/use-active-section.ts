"use client";

import { useEffect, useState } from "react";

/** Scroll-spy bersama: kapan pun halaman discroll, hook pakai ini
 *  mengembalikan id section yang paling dekat dengan top-of-page.
 *  Pakai getBoundingClientRect, bukan offsetTop — offsetTop salah
 *  karena wrapper .reveal ber-transform (estableness offsetParent). */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const compute = () => {
      const mid = window.innerHeight * 0.45;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) current = id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = ids[ids.length - 1] ?? current;
      }
      setActive(current);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids]);

  return [active, setActive] as const;
}
