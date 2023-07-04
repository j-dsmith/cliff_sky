import ImageBanner from "@/components/UI/ImageBanner";
import contactSrc from "@/../public/images/contact.png";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import ContactForm from "./ContactForm";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300", "500"] });

const Contact = () => {
  return (
    <section
      className={clsx(
        "grid grid-cols-1 gap-8 px-4 pt-16 md:h-[calc(100vh-96px)] md:grid-cols-2 md:gap-8 md:px-6 lg:gap-16",
        unbounded.className
      )}
    >
      <ImageBanner
        role="contact"
        src={contactSrc}
        priority={true}
        blurDataURL="/images/contact.png"
        className="h-[30vh] w-full md:h-[revert] md:self-stretch"
      />
      <div className="flex flex-1 flex-col justify-between gap-6">
        <h1 className="text-6xl font-medium 3xs:text-4xl 2xs:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s Get
          <br /> In Touch
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
