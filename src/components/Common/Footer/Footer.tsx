import SectionHeader from "@/components/UI/SectionHeader";
import FooterLinks from "./FooterLinks/FooterLinks";
import Spacer from "@/components/UI/Spacer/Spacer";

const Footer = () => {
  return (
    <footer className="flex flex-none flex-col px-4 pb-6 pt-12 md:px-6">
      <SectionHeader textSegments={{ top: "Idea?", bottom: "Contact" }} />
      <Spacer height="h-6" />
      <FooterLinks />
      <p className="mx-auto max-w-[55ch] pt-12 text-center text-stone-500">
        Being a Minneapolis native, I respectfully acknowledge that I create on
        the traditional and ancestral homelands of the Očhéthi Šakówiŋ (Sioux
        Nation), and Wahpekute (Dakota) people.
      </p>
    </footer>
  );
};
export default Footer;
