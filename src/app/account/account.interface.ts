export interface Account {
  _id: string;
  available_balance: number;
  booked_balance: number;
  value_dated_balance: number;
  account_name: string;
  product: string;
  currency: string;
  account_numbers: Array<AccountNumber>;
  latest_transaction_booking_date: string;
  account_type: string;
  country: string;
  status: string;
}

export interface AccountNumber {
  _type: string;
  value: string;
}

export interface TransactionResponse {
  continuation_key: string;
  transactions: Array<Transaction>
}

export interface Transaction {
  _type: TransactionType;
  transaction_id: string;
  currency: string;
  booking_date: string;
  value_date: string;
  type_description: string;
  narrative: string;
  message: string;
  status: string;
  reference: string;
  own_message: string;
  counterparty_name: string;
  transaction_date: string;
  card_number: string;
  payment_date: string;
  amount: number;
}

export enum TransactionType {
  CreditTransaction,
  DebitTransaction
}
