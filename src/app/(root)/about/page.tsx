import ImageBanner from "@/components/UI/ImageBanner";

import aboutSrc from "@/../public/images/about_cdm.png";

import Spacer from "@/components/UI/Spacer/Spacer";
import { PortableText } from "@portabletext/react";
import { getBio } from "../../../../sanity/lib/queries/bio";
import ServicesList from "@/components/Sections/About/AboutPage/ServicesList";
import BioContent from "@/components/Sections/About/AboutPage/BioContent";

const AboutPage = async () => {
  const { bio_long } = await getBio();

  const renderBioIntro = () => {
    return bio_long.map((block) => {
      return (
        <div key={block._key} className="max-w-[55ch] md:text-xl">
          <PortableText value={block} />
        </div>
      );
    });
  };

  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8 pt-20 ">
        <h1 className="order-2 text-3xl font-medium leading-tight md:order-1 lg:text-4xl">
          <p>Visual Creative &</p>
          <p>Graphic Designer,</p>
          <p>
            Based in <span className="inline sm:hidden">Mpls</span>
            <span className="hidden sm:inline">Minneapolis</span>
            <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cs-mustard" />
          </p>
        </h1>
        <ImageBanner
          role="hero"
          src={aboutSrc}
          blurDataURL="/images/about_cdm.png"
          priority={true}
          className="order-1 h-[30vh] md:order-2"
        />
      </div>

      <Spacer height="h-24" className="border-b border-stone-200" />
      <Spacer height="h-20" />
      <BioContent>{renderBioIntro()}</BioContent>
      <Spacer height="h-8" />
      {/* <ImageBanner
        src={aboutSrc}
        staticAnimation={true}
        className="h-[calc(100vh-48px)]"
      /> */}
      <Spacer height="h-20" />

      <h2 className="text-3xl font-medium lg:text-3xl">My Services</h2>
      <Spacer height="h-12" />
      <ServicesList />
    </section>
  );
};
export default AboutPage;
