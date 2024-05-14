import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const ContextData = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default ContextData;

export const CryptoState = () => {
  return useContext(Crypto);
};
