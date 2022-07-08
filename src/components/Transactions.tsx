import { Box, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Transaction from "./interface/transactions.interface";
import TransactionInterface from "./interface/transactions.interface";
import { Search } from "./Search";
import SingleTransaction from "./SingleTransaction";

//dateTypes
type dateArrayTypes = {
  [key: string]: Transaction[];
};

const Transactions: FC<TransactionInterface> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [filter, setFilter] = useState(props.transactions);

  //filter status
  const statusFilter = filter.filter(
    (transaction) =>
      transaction.status.toLowerCase().includes(status.toLocaleLowerCase()) ||
      status === ""
  );

  //filter type
  const typeFilter = statusFilter.filter(
    (transaction) =>
      transaction.type.toLowerCase().includes(type.toLocaleLowerCase()) ||
      type === ""
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
  const groups = filteredOptions.reduce(
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

  // Edit: to add it in the array format
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      transactions: groups[date],
    };
  });

  //search props
  const searchProps = {
    searchText,
    setSearchText,
    filteredOptions,
  };
  return (
    <>
      <Search {...searchProps} />

      <SimpleGrid columns={[2, 2, 2, 2]} spacing={[4, 4]}>
        <Select
          placeholder="Sort by status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          bg="brand.300"
          color="brand.400"
        >
          <option value="pending">pending</option>
          <option value="success">success</option>
        </Select>
        <Select
          bg="brand.300"
          color="brand.400"
          placeholder="Sort by type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="debit">debit</option>
          <option value="credit">credit</option>
        </Select>
      </SimpleGrid>

      {!!groupArrays.length ? (
        <>
          {groupArrays.map((data, index) => (
            <SingleTransaction key={index} {...data} />
          ))}
        </>
      ) : (
        <Box my="1.3rem">
          <Heading color="brand.300" fontSize={"1.5rem"} fontWeight={700}>
            No transactions matches your search.
          </Heading>
        </Box>
      )}
    </>
  );
};

export default Transactions;
