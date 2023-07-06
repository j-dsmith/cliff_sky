import SectionHeader from "@/components/UI/SectionHeader";
import { Bio } from "@/../sanity/lib/queries/bio";
import AboutContent from "./AboutShort";
import aboutImgLg from "@/../public/images/about_summary.png";
import aboutImgSm from "@/../public/images/about_summary_sm.png";
import ImageBanner from "@/components/UI/ImageBanner";
import Spacer from "@/components/UI/Spacer/Spacer";

type Props = {
  bio: Bio | null;
};

const AboutSummary = ({ bio }: Props) => {
  return (
    <section className="px-4 pb-20 pt-12 md:px-6 lg:px-6 xl:px-8">
      <SectionHeader textSegments={{ top: "About", bottom: "" }} />
      <Spacer height="h-8" />

      <AboutContent bio={bio} />
      <Spacer height="h-8" />
      {/* SRC for Mobile */}
      <ImageBanner
        blurDataURL="/images/about_summary.png"
        role="hero"
        src={aboutImgSm}
        className="h-[60vh] sm:hidden"
      />
      {/* SRC for Tablet & Desktop */}
      <ImageBanner
        blurDataURL="/images/about_summary.png"
        role="hero"
        src={aboutImgLg}
        className="hidden h-[60vh] sm:block"
      />
    </section>
  );
};
export default AboutSummary;
