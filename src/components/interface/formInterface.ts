import { ReactElement } from "react";

export default interface FormInterface {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  children: ReactElement;
  helper?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
}
