import { FC } from "react";
import { FormControl, FormErrorMessage, Text } from "@chakra-ui/react";
import FormInterface from "./interface/form.interface";

const FormField: FC<FormInterface> = ({
  isInvalid,
  children,
  errorMessage,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {children}
      {isInvalid && (
        <FormErrorMessage>
          <Text
            my="1.3rem"
            color="brand.300"
            fontSize={"1.5rem"}
            fontWeight={700}
          >
            {errorMessage}{" "}
          </Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormField;
