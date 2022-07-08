export default interface Transaction {
  id: number;
  name: string;
  date: string;
  status: string;
  type: string;
}

export default interface TransactionInterface {
  transactions: Transaction[];
}
