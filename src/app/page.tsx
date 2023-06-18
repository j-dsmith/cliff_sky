import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { getProjects } from "../../sanity/lib/queries/projects";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="">
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
    </main>
  );
}
