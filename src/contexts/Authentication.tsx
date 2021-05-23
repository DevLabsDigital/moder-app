import React, { useState, createContext } from "react";

export interface User{
  name?: string,
  email?: string,
  isOnline?: boolean
}


export interface TokensContextData {
  token?: string;
  currentUser?: User;
  isLoading: boolean;
  getToken: () => void;
  removeToken: () => void;
  setToken: (token: string) => void;
  setCurrentUser: (currentUser: User) => void;
}

export const tokenContextDefaultValue: TokensContextData = {
  currentUser: {},
  token: "",
  isLoading: false,
  getToken: () => null,
  removeToken: () => null,
  setToken: () => null,
  setCurrentUser: ()=> null,
}


 
export const TokensContext = createContext<TokensContextData>(tokenContextDefaultValue);