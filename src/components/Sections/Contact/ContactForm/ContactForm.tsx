"use client";
import useField from "@/hooks/useField";
import Input from "./Input";
import { Montserrat } from "next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const ContactForm = () => {
  const name = useField("text");
  const email = useField("email");
  const message = useField("textarea");

  return (
    <form
      className={clsx(
        "flex flex-col gap-6 placeholder:font-semibold",
        montserrat.className
      )}
      action="POST"
    >
      <Input name="name" placeholder="Your name" {...name} />
      <Input name="email" placeholder="Your email" {...email} />
      <Input name="message" placeholder="Your message" {...message} />
      <button
        type="submit"
        className="cursor-pointer rounded-md bg-black px-5 py-4 text-lg font-semibold text-white"
      >
        Send Your Message
      </button>
    </form>
  );
};
export default ContactForm;
