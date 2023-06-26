import SectionHeader from "@/components/UI/SectionHeader";
import { Bio } from "@/../sanity/lib/queries/bio";
import AboutContent from "./AboutContent";
import aboutImg from "@/../public/images/about.png";
import ImageBanner from "@/components/UI/ImageBanner";
import Spacer from "@/components/UI/Spacer/Spacer";

type Props = {
  bio: Bio;
};

const About = ({ bio }: Props) => {
  return (
    <section className="px-4 pb-20 pt-12 md:px-6 lg:px-6 xl:px-8">
      <SectionHeader textSegments={{ top: "About", bottom: "" }} />
      <Spacer height="h-8" />

      <AboutContent bio={bio} />
      <Spacer height="h-6" />
      <ImageBanner src={aboutImg} className="h-[50vh]" />
    </section>
  );
};
export default About;
