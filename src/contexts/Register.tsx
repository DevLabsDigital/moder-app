import React, { useState, createContext } from "react";



export interface RegisterData {
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  vehicle?: string;
  cep?: string;
  address?: string;
  district?: string;
  state?: string;
  city?: string;
}

export interface RegisterDatasContextData {
  registerData?: RegisterData;
  setRegisterData: (registerData: RegisterData) => void;
}

export const registerDataContextDefaultValue: RegisterDatasContextData = {
  registerData: undefined,
  setRegisterData: () => null
}


 
export const RegisterDatasContext = createContext<RegisterDatasContextData>(registerDataContextDefaultValue);