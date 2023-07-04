import { InputFieldProps, InputFieldType } from "@/types/FieldProps";
import { ChangeEvent, useState } from "react";

/**
 * A custom hook that returns an object with properties and methods for an input field.
 * @param type - The type of input field.
 * @returns An object with properties and methods for an input field.
 */
const useField = (type: InputFieldType): InputFieldProps => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default useField;
