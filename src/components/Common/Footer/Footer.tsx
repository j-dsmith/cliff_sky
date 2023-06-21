import SectionHeader from "@/components/UI/SectionHeader";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 pb-6 pt-12">
      <SectionHeader textSegments={{ top: "Idea?", bottom: "Contact" }} />
      <FooterLinks />
      <p className="pt-12 text-center text-sm text-stone-600">
        Being a Minneapolis native, I respectfully acknowledge that I create on
        the traditional and ancestral homelands of the Očhéthi Šakówiŋ (Sioux
        Nation), and Wahpekute (Dakota) people.
      </p>
    </footer>
  );
};
export default Footer;
