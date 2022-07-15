import { Transaction } from "./transactions.interface";

type optionType = {
  status: string;
  type: string;
};

export default interface SearchInterface {
  searchText: string;
  filteredOptions: Transaction[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  option: optionType;
  setOption: React.Dispatch<React.SetStateAction<optionType>>;
  clearState: React.MouseEventHandler<HTMLButtonElement>;
}
