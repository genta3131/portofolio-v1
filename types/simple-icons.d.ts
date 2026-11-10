/** Deklarasi minimal untuk simple-icons: package.json v16 menjanjikan
 *  index.d.ts tapi file tak terkirim (bug packaging). Jalur "icons/<slug>"
 *  ada dan stabil, jadi cukup declare properti yang kita pakai. */
declare module "simple-icons" {
  export interface SimpleIcon {
    title: string;
    slug: string;
    hex: string;
    path: string;
    source: string;
    svg: string;
    guidelines?: string;
    license?: { type: string; url: string };
  }
  export const siGithub: SimpleIcon;
  export const siGit: SimpleIcon;
  export const siInertia: SimpleIcon;
  export const siLaravel: SimpleIcon;
  export const siMysql: SimpleIcon;
  export const siPhp: SimpleIcon;
  export const siReact: SimpleIcon;
  export const siTailwindcss: SimpleIcon;
  export const siTypescript: SimpleIcon;
}
