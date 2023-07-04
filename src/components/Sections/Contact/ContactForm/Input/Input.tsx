import { InputFieldProps } from "@/types/FieldProps";

type IdentityProps = {
  name: string;
  placeholder: string;
  className?: string;
};

type CombinedInputProps = IdentityProps & InputFieldProps;

const inputClassName = "rounded-md bg-stone-200 px-5 py-4";

const Input = (props: CombinedInputProps) => {
  return props.type === "textarea" ? (
    <textarea className={inputClassName} {...props} rows={6} cols={50} />
  ) : (
    <input className={inputClassName} {...props} />
  );
};
export default Input;
