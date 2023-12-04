"use client";
import Input from "./Input";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { useForm, Controller, type FieldValues } from "react-hook-form";
import { sendContactForm } from "@/utils/sendContactForm";
import { useState } from "react";

import Spacer from "@/components/UI/Spacer/Spacer";
import SubmitMessage from "./SubmitMessage/SubmitMessage";
import { ContactFormData } from "@/types/ContactFormData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const ContactForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmitForm = async (data: FieldValues) => {
    try {
      await sendContactForm(data as ContactFormData);
      reset();
      setFormSubmitted(true);
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  if (formSubmitted && submitStatus) {
    return (
      <>
        <SubmitMessage status={submitStatus} />
        <Spacer height="h-24" />
      </>
    );
  }

  return (
    <form
      className={clsx(
        "flex flex-col gap-6 placeholder:font-semibold",
        montserrat.className
      )}
      onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      action="POST"
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Your name"
            type="text"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Your email"
            type="text"
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Your Message"
            type="textarea"
          />
        )}
      />

      <button
        type="submit"
        className="cursor-pointer rounded-xl bg-black px-5 py-4 text-lg font-semibold text-white"
      >
        Send Your Message
      </button>
    </form>
  );
};
export default ContactForm;
