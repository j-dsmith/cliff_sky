import SectionHeader from "@/components/UI/SectionHeader";
import { Bio } from "@/../sanity/lib/queries/bio";
import AboutContent from "./AboutShort";
import aboutImg from "@/../public/images/about_summary.png";
import ImageBanner from "@/components/UI/ImageBanner";
import Spacer from "@/components/UI/Spacer/Spacer";

type Props = {
  bio: Bio;
};

const AboutLong = ({ bio }: Props) => {
  return (
    <section className="px-4 pb-20 pt-12 md:px-6 lg:px-6 xl:px-8">
      <SectionHeader textSegments={{ top: "About", bottom: "" }} />
      <Spacer height="h-8" />

      <AboutContent bio={bio} />
      <Spacer height="h-8" />
      <ImageBanner
        blurDataURL="/images/about_summary.png"
        role="hero"
        src={aboutImg}
        className="h-[60vh]"
      />
    </section>
  );
};
export default AboutLong;
