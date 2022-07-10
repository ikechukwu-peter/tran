import { ReactElement } from "react";

export default interface FormInterface {
  isInvalid?: boolean;
  errorMessage?: string;
  children: ReactElement;
}
