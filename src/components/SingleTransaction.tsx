import {
  Box,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tab,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Transaction from "./interface/transactions.interface";

type SingleTransactionInterface = {
  date: string;
  transactions: Transaction[];
};

const SingleTransaction: FC<SingleTransactionInterface> = ({
  date,
  transactions,
}) => {
  return (
    <Box w={"100%"} overflow="hidden">
      <Box
        py={{
          sm: "1rem",
          base: "2rem",
          md: "2.3rem",
          lg: "2.6rem",
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
          color="white"
          border={"2px"}
          borderColor="red"
        >
          {date}
        </Heading>
      </Box>

      {!!transactions.length &&
        transactions.map(({ name, id, status, type }, index) => (
          <Flex
            key={index}
            gap={{
              sm: "2rem",
              base: "1rem",
              md: "2rem",
              lg: "2.3rem",
              xl: "2.5rem",
            }}
            align="flex-start"
            justify={"flex-start"}
            py="1rem"
            direction={{ base: "column", md: "row" }}
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
                color="white"
                border={"2px"}
                borderColor="red"
                fontSize={{ base: "1rem" }}
                minH={"12px"}
              >
                {id}
              </Heading>
            </Box>{" "}
            <Flex
              gap={{
                sm: "2rem",
                base: "2.2rem",
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
              color="white"
              border={"2px"}
              borderColor="red"
              minW="280px"
              minH={"10px"}
            >
              <Heading color="white" fontSize={{ base: "1rem" }}>
                Name <Text> {name}</Text>
              </Heading>{" "}
              <Heading color="white" fontSize={{ base: "1rem" }}>
                Status <Text> {status}</Text>
              </Heading>
              <Heading color="white" fontSize={{ base: "1rem" }}>
                Type <Text> {type}</Text>
              </Heading>
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};

export default SingleTransaction;
