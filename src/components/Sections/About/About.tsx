import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import { Bio } from "@/../sanity/lib/queries/bio";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";

type Props = {
  bio: Bio;
};

const About = ({ bio }: Props) => {
  return (
    <section className="px-4 pb-20 pt-12">
      <SectionHeader textSegments={{ top: "About", bottom: "Me" }} />
      <AboutContent bio={bio} />
    </section>
  );
};
export default About;
