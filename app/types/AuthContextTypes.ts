type PurchasesHistory = {
  title: string;
  price: number;
  date: string;
};

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  date_of_birth: string;
  gender: string;
  created: string;
  purchases: PurchasesHistory[];
};

export type AuthContextStateType = {
  data: UserData;
  token: string;
  setUserData: (userData: UserData) => void;
  setToken: (token: string) => void;
  logout: () => void;
};
