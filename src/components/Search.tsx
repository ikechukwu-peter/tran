import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";
import FormField from "./FormField";
import SearchInterface from "./interface/search.interface";

export const Search: FC<SearchInterface> = ({
  searchText,
  setSearchText,
  filteredOptions,
  option,
  setOption,
  clearState,
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
        <FormField isInvalid={!filteredOptions.length}>
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

      <Flex
        justify={{ base: "stretch", md: "space-between" }}
        align="center"
        gap={{ base: "1rem", md: ".2rem" }}
        flexWrap="wrap"
      >
        <Button
          onClick={() => setOption({ ...option, type: "credit" })}
          bg={option.type === "credit" ? "brand.200" : "brand.300"}
          color={option.type === "credit" ? "brand.300" : "brand.400"}
          _hover={{
            bg: option.type === "credit" ? "brand.300" : "brand.200",
            color: option.type === "credit" ? "brand.400" : "brand.400",
          }}
        >
          Credit
        </Button>
        <Button
          onClick={() => setOption({ ...option, type: "debit" })}
          bg={option.type === "debit" ? "brand.200" : "brand.300"}
          color={option.type === "debit" ? "brand.300" : "brand.400"}
          _hover={{
            bg: option.type === "debit" ? "brand.300" : "brand.200",
            color: option.type === "debit" ? "brand.400" : "brand.400",
          }}
        >
          Debit
        </Button>
        <Button
          onClick={() => setOption({ ...option, status: "success" })}
          bg={option.status === "success" ? "brand.200" : "brand.300"}
          color={option.status === "success" ? "brand.300" : "brand.400"}
          _hover={{
            bg: option.status === "success" ? "brand.300" : "brand.200",
            color: option.status === "success" ? "brand.400" : "brand.400",
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => setOption({ ...option, status: "error" })}
          bg={option.status === "error" ? "brand.200" : "brand.300"}
          color={option.status === "error" ? "brand.300" : "brand.400"}
          _hover={{
            bg: option.status === "error" ? "brand.300" : "brand.200",
            color: option.status === "error" ? "brand.400" : "brand.400",
          }}
        >
          Error
        </Button>
        <Button
          onClick={clearState}
          bg="brand.300"
          color="brand.400"
          _hover={{
            bg: "brand.200",
            color: "brand.400",
          }}
        >
          Clear
        </Button>
      </Flex>
    </>
  );
};
