import ImageBanner from "@/components/UI/ImageBanner";
import aboutSrc from "@/../public/images/about.png";
import Spacer from "@/components/UI/Spacer/Spacer";
import { PortableText } from "@portabletext/react";
import { getBio } from "../../../../sanity/lib/queries/bio";
import ServicesList from "@/components/Sections/About/AboutPage/ServicesList";

const AboutPage = async () => {
  const { bio, services } = await getBio();

  const renderBioIntro = () => {
    return bio.bio_short.map((block) => {
      return (
        <div key={block._key} className="max-w-[55ch] md:text-xl">
          <PortableText value={block} />
        </div>
      );
    });
  };

  return (
    <section className="px-4 md:px-6">
      <h1 className="pt-20 text-3xl font-medium leading-tight lg:text-4xl">
        <span className="">Visual Creative & Graphic Designer</span>
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cs-mustard"></span>{" "}
        <span className="block">Based in Minneapolis</span>
      </h1>
      <Spacer height="h-24" className="border-b border-stone-200" />
      <Spacer height="h-20" />
      {renderBioIntro()}
      <Spacer height="h-8" />
      <ImageBanner src={aboutSrc} className="h-[calc(100vh-48px)]" />
      <Spacer height="h-20" />
      <h2 className="text-2xl lg:text-3xl">My Services</h2>
      <Spacer height="h-12" />
      <ServicesList services={services} />
    </section>
  );
};
export default AboutPage;
