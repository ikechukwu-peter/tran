import { FC } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import FormInterface from "./interface/formInterface";

const FormField: FC<FormInterface> = ({
  error,
  label,
  children,
  helper,
  isRequired,
  isReadOnly,
  errorMessage,
}) => {
  return (
    <FormControl
      isInvalid={error}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && <FormLabel color="gray.100">{label}</FormLabel>}
      {children}
      {helper && <FormHelperText>{helper}</FormHelperText>}
      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormField;
