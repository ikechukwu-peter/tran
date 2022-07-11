import { FC } from "react";
import { FormControl } from "@chakra-ui/react";
import FormInterface from "./interface/form.interface";

const FormField: FC<FormInterface> = ({ isInvalid, children }) => {
  return <FormControl isInvalid={isInvalid}>{children}</FormControl>;
};

export default FormField;
