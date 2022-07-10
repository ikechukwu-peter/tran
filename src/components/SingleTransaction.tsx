import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import { SingleTransactionInterface } from "./interface/transactions.interface";

const SingleTransaction: FC<SingleTransactionInterface> = ({
  date,
  transactions,
}) => {
  const [isLargerThan600px] = useMediaQuery("(min-width: 600px)");
  return (
    <Box overflow={"hidden"} width="100%">
      <Box
        py={{
          sm: "1rem",
          base: "1rem",
          md: "1.4rem",
          lg: "1.5rem",
        }}
      >
        <Heading
          p={{
            sm: "1rem",
            base: ".4rem",
            md: ".8rem",
            lg: "1rem",
          }}
          display={"inline-block"}
          color="brand.300"
          border={"2px"}
          borderColor="brand.700"
          fontSize={{ base: "1rem", md: "1rem", lg: "1.4rem", xl: "1.6rem" }}
        >
          {date}
        </Heading>
      </Box>

      {!!transactions.length &&
        transactions.map(({ name, id, status, type }, index) => (
          <Flex
            key={index}
            gap={{
              sm: "1rem",
              base: "1rem",
              md: "2rem",
              lg: "2.3rem",
              xl: "2.5rem",
            }}
            align="flex-start"
            justify={"flex-start"}
            py={{ base: ".5rem", md: "1rem" }}
            direction={{ sm: "column", base: "row", md: "row" }}
          >
            <Box>
              <Heading
                p={{
                  sm: "1rem",
                  base: "1rem",
                  md: "1.1rem",
                  lg: "1.4rem",
                }}
                display={"inline-block"}
                color="brand.300"
                border={"2px"}
                borderColor="brand.700"
                fontSize={{ base: "1rem" }}
                minH={"12px"}
              >
                {id}
              </Heading>
            </Box>{" "}
            <Flex
              gap={{
                sm: "2rem",
                base: "1rem",
                md: "2.5rem",
                lg: "3rem",
                xl: "4rem",
              }}
              align="flex-start"
              justify={"flex-start"}
              p={{
                sm: "1rem",
                base: ".4rem",
                md: ".8rem",
                lg: "1rem",
              }}
              color="brand.300"
              border={"2px"}
              borderColor="brand.700"
              minW={isLargerThan600px ? "350px" : "225px"}
              minH={"10px"}
            >
              <Box>
                <Heading color="brand.300" fontSize={{ base: "1rem" }}>
                  Name
                </Heading>{" "}
                <Text
                  color="brand.300"
                  fontWeight="500"
                  fontSize={{ base: "1rem" }}
                  overflowWrap="anywhere"
                >
                  {" "}
                  {name}
                </Text>
              </Box>

              <Box>
                <Heading color="brand.300" fontSize={{ base: "1rem" }}>
                  Status
                </Heading>{" "}
                <Text
                  color="brand.300"
                  fontWeight="500"
                  fontSize={{ base: "1rem" }}
                  overflowWrap="anywhere"
                >
                  {" "}
                  {status}
                </Text>
              </Box>

              <Box>
                <Heading color="brand.300" fontSize={{ base: "1rem" }}>
                  Type
                </Heading>{" "}
                <Text
                  color="brand.300"
                  fontSize={{ base: "1rem" }}
                  fontWeight="500"
                  overflowWrap="anywhere"
                >
                  {" "}
                  {type}
                </Text>
              </Box>
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};

export default SingleTransaction;
