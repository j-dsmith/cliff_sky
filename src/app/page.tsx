import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Projects />
    </main>
  );
}
