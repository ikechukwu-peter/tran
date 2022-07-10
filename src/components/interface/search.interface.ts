import { Transaction } from "./transactions.interface";

export default interface SearchInterface {
  searchText: string;
  filteredOptions: Transaction[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
