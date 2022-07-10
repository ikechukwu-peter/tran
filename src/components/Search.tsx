import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";
import FormField from "./FormField";
import SearchInterface from "./interface/search.interface";

export const Search: FC<SearchInterface> = ({
  searchText,
  setSearchText,
  filteredOptions,
}) => {
  return (
    <>
      <Box
        my={{
          sm: "1rem",
          base: "1.5rem",
          md: "2rem",
          lg: "2.2rem",
          xl: "2.4rem",
        }}
      >
        <FormField
          isInvalid={!filteredOptions.length}
          errorMessage={" No transactions matches your search."}
        >
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.trim().toLowerCase())}
            placeholder="Type to search..."
            color="brand.600"
            fontWeight={600}
            bg="brand.300"
            borderColor={!!filteredOptions.length ? "brand.600" : "brand.200"}
            borderWidth="2px"
            _focus={{
              borderColor: !!filteredOptions.length ? "brand.500" : "brand.200",
            }}
            _hover={{
              borderColor: !!filteredOptions.length ? "brand.500" : "brand.200",
            }}
            _active={{
              borderColor: !!filteredOptions.length ? "brand.500" : "brand.200",
            }}
          />
        </FormField>
      </Box>
    </>
  );
};
