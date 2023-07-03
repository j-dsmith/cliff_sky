import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { getProjects } from "@/../sanity/lib/queries/projects";
import { getBio } from "@/../sanity/lib/queries/bio";
import AboutSummary from "@/components/Sections/About/AboutSummary";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

export default async function Home() {
  const projects = await getProjects();
  const { bio } = await getBio();

  return (
    <>
      <Hero />
      <h2
        className={clsx(
          "pb-20 pt-24 text-center text-lg text-stone-700 3xs:text-base xs:text-lg md:pb-32 md:pt-36 md:text-xl",

          unbounded.className
        )}
      >
        Art and Design by <br className="md:hidden" /> Carey deVictoria-Michel
      </h2>
      <Projects projects={projects} />
      <AboutSummary bio={bio} />
    </>
  );
}