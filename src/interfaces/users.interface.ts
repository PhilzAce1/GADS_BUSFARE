export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  password?: string;
  email: string;
  phone: string;
  role?: number;
  bankname?: string;
  bankusername?: string;
  accountnumber?: number;
  currentBalance?: number;
}
