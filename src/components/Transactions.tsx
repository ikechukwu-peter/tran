import { Box, Button, Flex, Text, useRadio } from "@chakra-ui/react";
import { FC, useState } from "react";
import TransactionInterface from "./interface/transactions.interface";
import { Search } from "./Search";
import SingleTransaction from "./SingleTransaction";
import { dateArrayTypes } from "./interface/transactions.interface";

const Transactions: FC<TransactionInterface> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState(props.transactions);
  const [option, setOption] = useState({
    status: "",
    type: "",
  });

  //filter status
  const statusFilter = transactions.filter(
    (transaction) =>
      transaction.status
        .toLowerCase()
        .includes(option.status.toLocaleLowerCase()) || option.status === ""
  );

  const typeFilter = statusFilter.filter(
    (transaction) =>
      transaction.type
        .toLowerCase()
        .includes(option.type.toLocaleLowerCase()) || option.type === ""
  );

  //filter status, type and name once a user start typing
  const filteredOptions = typeFilter.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      transaction.status
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      transaction.type.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      searchText === ""
  );

  // this gives an object with dates as keys
  const groupByDateArray = filteredOptions.reduce(
    (groups: dateArrayTypes, transactions) => {
      const date = transactions.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transactions);

      return groups;
    },
    {}
  );

  // add it in the array format
  const groupByDateObj = Object.keys(groupByDateArray).map((date) => {
    return {
      date,
      transactions: groupByDateArray[date],
    };
  });

  //search props
  const searchProps = {
    searchText,
    setSearchText,
    filteredOptions,
  };

  return (
    <Box w={["100%", "100%", "80%", "80%"]} m="auto">
      <Search {...searchProps} />

      <Flex
        justify={"space-between"}
        align="center"
        gap={{ base: "1rem", md: ".2rem" }}
      >
        <Button
          onClick={() => setOption({ ...option, type: "credit" })}
          bg={option.type === "credit" ? "brand.200" : "brand.300"}
          color={option.type === "credit" ? "brand.300" : "brand.600"}
          _hover={{
            bg: option.type === "credit" ? "brand.300" : "brand.200",
          }}
        >
          Credit
        </Button>
        <Button
          onClick={() => setOption({ ...option, type: "debit" })}
          bg={option.type === "debit" ? "brand.200" : "brand.300"}
          color={option.type === "debit" ? "brand.300" : "brand.600"}
          _hover={{
            bg: option.type === "debit" ? "brand.300" : "brand.200",
          }}
        >
          Debit
        </Button>
        <Button
          onClick={() => setOption({ ...option, status: "success" })}
          bg={option.status === "success" ? "brand.200" : "brand.300"}
          color={option.status === "success" ? "brand.300" : "brand.600"}
          _hover={{
            bg: option.status === "success" ? "brand.300" : "brand.200",
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => setOption({ ...option, status: "error" })}
          bg={option.status === "error" ? "brand.200" : "brand.300"}
          color={option.status === "error" ? "brand.300" : "brand.600"}
          _hover={{
            bg: option.status === "error" ? "brand.300" : "brand.200",
          }}
        >
          Error
        </Button>
      </Flex>

      {!!groupByDateObj.length ? (
        <>
          {groupByDateObj.map((data, index) => (
            <SingleTransaction key={index} {...data} />
          ))}
        </>
      ) : (
        <Text
          my="1.3rem"
          color="brand.300"
          fontSize={"1.5rem"}
          fontWeight={700}
        >
          No transactions matches your search.
        </Text>
      )}
    </Box>
  );
};

export default Transactions;
