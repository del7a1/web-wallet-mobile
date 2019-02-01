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

interface AccountNumber {
  _type: string;
  value: string;
}
