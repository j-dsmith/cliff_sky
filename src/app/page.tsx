import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { getProjects } from "../../sanity/lib/queries/projects";
import About from "@/components/Sections/About";
import { getBio } from "../../sanity/lib/queries/bio";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

export default async function Home() {
  const projects = await getProjects();
  const bio = await getBio();

  return (
    <>
      <Hero />
      <h2
        className={clsx(
          [
            "text-xl",
            "text-stone-700",
            "pt-24",
            "px-4",
            "pb-20",
            "text-center",
          ],
          unbounded.className
        )}
      >
        Art and Design by Carey deVictoria-Michel
      </h2>
      <Projects projects={projects} />
      <About bio={bio} />
    </>
  );
}
