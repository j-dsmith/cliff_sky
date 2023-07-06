import { InputFieldProps } from "@/types/FieldProps";
import { ChangeEvent } from "react";

type Props = {
  placeholder: string;
  type: "text" | "textarea";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const inputClassName = "rounded-md bg-stone-200 px-5 py-4";

const Input = (props: Props) => {
  return props.type === "textarea" ? (
    <textarea className={inputClassName} {...props} rows={6} cols={50} />
  ) : (
    <input className={inputClassName} {...props} />
  );
};
export default Input;
