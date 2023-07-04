import { ChangeEvent } from "react";

export type InputFieldType = HTMLInputElement["type"];

export type InputFieldProps = {
  type: InputFieldType;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
