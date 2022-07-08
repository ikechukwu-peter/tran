import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";
import FormField from "./FormField";
import SearchInterface from "./interface/search.interface";

export const Search: FC<SearchInterface> = ({
  searchText,
  setSearchText,
  filter,
  setFilter,
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
        <FormField>
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.trim().toLowerCase())}
            placeholder="Type a name here to search..."
            color="gray.600"
            fontWeight={600}
            bg="white"
            borderColor={"orange.300"}
            borderWidth="2px"
            _focus={{
              borderColor: "teal.600",
            }}
            _hover={{
              borderColor: "teal.600",
            }}
            _active={{
              borderColor: "teal.600",
            }}
          />
        </FormField>
      </Box>
    </>
  );
};
