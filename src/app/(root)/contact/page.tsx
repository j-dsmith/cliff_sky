import Contact from "@/components/Sections/Contact/Contact";
import Spacer from "@/components/UI/Spacer/Spacer";

export const metadata = {
  title: "Contact - Cliff & Sky",
  description: "Contact Cliff & Sky",
  openGraph: {
    title: "Contact - Cliff & Sky",
    siteName: "Cliff & Sky",
    locale: "en_US",
    type: "website",
    url: "https://cliffandsky.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Contact />
      <Spacer height="h-20" />
    </>
  );
};
export default ContactPage;
