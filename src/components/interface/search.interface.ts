import TransactionInterface from "./transactions.interface";

export default interface SearchInterface {
  searchText: string;
  filteredOptions?: TransactionInterface[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
