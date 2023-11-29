import ImageBanner from "@/components/UI/ImageBanner";
import aboutSrc from "@/../public/images/about_cdm.png";

const AboutHeader = () => {
  return (
    <div className="flex flex-col gap-8 border-b border-gray-200 pb-24 pt-20">
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
  );
};
export default AboutHeader;
