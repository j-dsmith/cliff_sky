import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import clsx from "clsx";
import { Unbounded } from "next/font/google";
import { getProjects } from "@/../sanity/lib/queries/projects";
import { getBio } from "@/../sanity/lib/queries/bio";
import AboutSummary from "@/components/Sections/About/LandingPage/AboutSummary";
import { Metadata } from "next";
import Preload from "@/components/UI/Preload";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Cliff & Sky",
  description: "Art and Design portfolio of Carey deVictoria-Michel",
  openGraph: {
    title: "Cliff & Sky",
    siteName: "Cliff & Sky",
    locale: "en_US",
    type: "website",
    url: "https://cliffandsky.com",
  },
};

export default async function Home() {
  const projects = await getProjects();
  const bio = await getBio();

  return (
    <>
      <Preload />
      <Hero />
      <h2
        className={clsx(
          "pb-20 pt-24 text-center text-lg text-gray-700 3xs:px-2 3xs:text-base xs:px-4 xs:text-lg md:px-6 md:pb-32 md:pt-36 md:text-xl lg:px-8 2xl:px-16",
          unbounded.className
        )}
      >
        Art and Design by <br className="md:hidden" /> Carey deVictoria-Michel
      </h2>
      <Projects projects={projects ?? []} />
      <AboutSummary bio={bio ?? null} />
    </>
  );
}
