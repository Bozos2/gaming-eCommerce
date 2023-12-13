"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextStateType, UserData } from "../types/AuthContextTypes";

const defaultUserData = {
  firstName: "",
  lastName: "",
  email: "",
  date_of_birth: "",
  gender: "",
  created: "",
  purchases: [],
};

const authContextStateDefaultValues: AuthContextStateType = {
  data: defaultUserData,
  token: "",
  setUserData: (userData: UserData) => {},
  setToken: (token: string) => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextStateType>(
  authContextStateDefaultValues
);

type Children = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Children) => {
  const [authState, setAuthState] = useState<AuthContextStateType>(
    authContextStateDefaultValues
  );

  const setUserData = (userData: UserData) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      data: userData,
    }));
  };

  const setToken = (token: string) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      token: token,
    }));
  };

  const logout = () => {
    setAuthState(authContextStateDefaultValues);
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, setUserData, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
