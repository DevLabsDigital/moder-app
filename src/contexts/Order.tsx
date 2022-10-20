import React, { useState, createContext } from "react";

export interface Company{
    id?: number,
    name?: string,
    accountable?: string,
    address?: string,
    city?: string,
    cpfCnpj?: string,
    email?: string,
    neighborhood?: string,
}

export interface Order{
    id?: number,
    destinationAccountable?: string,
    destinationAddress?: string,
    destinationPhone?: string,
    destinationCity?: string,
    destinationState?: string,
    destinationNeighborhood?: string,
    note?: string,
    state?: string,
    createdAt?: string,
    stateLabel?: string,
    actionText?: string, 
    isPicked?: boolean,
    isDelivered?: boolean,
    createdThisMonth?: boolean,
    company?: Company,
}


export interface OrdersContextData {
  orders?: Order[];
  setOrders: (orders: Order[]) => void;
  currentOrder?: Order;
  setCurrentOrder: (currentOrder: Order) => void;
}

export const orderContextDefaultValue: OrdersContextData = {
  currentOrder: {} as Order,
  orders: [] as Order[],
  setOrders: ()=> null,
  setCurrentOrder: () => null,
}


 
export const OrderContext = createContext<OrdersContextData>(orderContextDefaultValue);