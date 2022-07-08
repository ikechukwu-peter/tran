import { Box, Select } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Transaction from "./interface/transactions.interface";
import TransactionInterface from "./interface/transactions.interface";
import { Search } from "./Search";
import SingleTransaction from "./SingleTransaction";

//dateTypes
type dateArrayTypes = {
  [key: string]: Transaction[];
};

/**
 * 
 * @param props 
 *   const filteredOptions = filter.filter(
    (cat) =>
      cat.toLowerCase().includes(search.toLocaleLowerCase()) ||
      cat.toLowerCase().includes(search.toLocaleLowerCase()) ||
      search === ""
  );

 * @returns 
 */

interface dateSplit {
  date: Date;
  dateS: Transaction[];
}

const Transactions: FC<TransactionInterface> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [filter, setFilter] = useState(props.transactions);

  const statusFilter = filter.filter(
    (transaction) =>
      transaction.status.toLowerCase().includes(status.toLocaleLowerCase()) ||
      transaction.status.toLowerCase().includes(status.toLocaleLowerCase()) ||
      status === ""
  );

  const typeFilter = statusFilter.filter(
    (transaction) =>
      transaction.type.toLowerCase().includes(type.toLocaleLowerCase()) ||
      transaction.type.toLowerCase().includes(type.toLocaleLowerCase()) ||
      type === ""
  );

  const filteredOptions = typeFilter.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      transaction.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
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

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      transactions: groups[date],
    };
  });

  const searchProps = {
    searchText,
    setSearchText,
    filter,
    setFilter,
  };
  return (
    <div>
      <Search {...searchProps} />

      <Select
        placeholder="Sort by status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        bg="white"
        color="black"
      >
        <option value="pending">pending</option>
        <option value="success">sucess</option>
      </Select>
      <Select
        bg="white"
        color="black"
        placeholder="Sort by type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="pending">pending</option>
        <option value="success">sucess</option>
        <option value="error">error</option>
      </Select>

      {!!groupArrays.length ? (
        <>
          {groupArrays.map((data, index) => (
            <SingleTransaction key={index} {...data} />
          ))}
        </>
      ) : (
        <Box>Nothing found</Box>
      )}
    </div>
  );
};

export default Transactions;
