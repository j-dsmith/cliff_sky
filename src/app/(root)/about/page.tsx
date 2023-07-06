import Spacer from "@/components/UI/Spacer/Spacer";
import { PortableText } from "@portabletext/react";
import { getBio } from "../../../../sanity/lib/queries/bio";
import ServicesList from "@/components/Sections/About/AboutPage/ServicesList";
import BioContent from "@/components/Sections/About/AboutPage/BioContent";
import AboutHeader from "@/components/Sections/About/AboutPage/AboutHeader";

export const metadata = {
  title: "About - Cliff & Sky",
  description: "Art & Design by Carey deVictoria-Michel",
  openGraph: {
    siteName: "Cliff & Sky",
    title: "About - Cliff & Sky",
    type: "website",
    url: "https://cliffandsky.com/about",
    locale: "en_US",
    images: [
      {
        url: "https://cliffandsky.com/images/og_about_page.png",
        width: 2880,
        height: 1800,
      },
    ],
  },
};

const AboutPage = async () => {
  const bio = await getBio();

  const renderBioIntro = () => {
    return bio?.bio_long.map((block) => {
      return (
        <div key={block._key} className="max-w-[55ch] md:text-xl">
          <PortableText value={block} />
        </div>
      );
    });
  };

  return (
    <section className="px-4 pb-48 md:px-6 lg:px-8">
      <AboutHeader />
      <Spacer height="h-20" />
      <BioContent>{renderBioIntro()}</BioContent>
      <Spacer height="h-28" />
      <h2 className="text-3xl font-medium lg:text-3xl">My Services</h2>
      <Spacer height="h-12" />
      <ServicesList />
    </section>
  );
};
export default AboutPage;
