import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { AboutIntro } from "@/components/about-intro";
import { Works } from "@/components/works";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { SiteFooter } from "@/components/site-footer";
import { Dock } from "@/components/dock";
import { ProgressBar, Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <SiteHeader />
      <main id="konten">
        <Hero />
        <Reveal>
          <AboutIntro />
        </Reveal>
        <Reveal>
          <Works />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <SiteFooter />
      </main>
      <Dock />
    </>
  );
}
