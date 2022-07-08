import TransactionInterface from "./transactions.interface";

export default interface SearchInterface {
  searchText: string;
  filter?: TransactionInterface[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setFilter?: React.Dispatch<React.SetStateAction<TransactionInterface[]>>;
}
