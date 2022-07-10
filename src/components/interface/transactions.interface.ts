export interface Transaction {
  id: number;
  name: string;
  date: string;
  status: string;
  type: string;
}

export default interface TransactionInterface {
  transactions: Transaction[];
}

export interface SingleTransactionInterface extends TransactionInterface {
  date: string;
}

export interface dateArrayTypes {
  [key: string]: Transaction[];
}
