import React, { createContext, useState, useContext } from "react";

// Create the context
const SellerContext = createContext();

// Create the provider wrapper
export const SellerProvider = ({ children }) => {
  const [seller, setSeller] = useState();

  return (
    <SellerContext.Provider value={{ seller, setSeller }}>
      {children}
    </SellerContext.Provider>
  );
};

// Create a custom hook for using the context
export const useSeller = () => {
  const context = useContext(SellerContext);
  if (context === undefined) {
    throw new Error('useSeller must be used within a SellerProvider');
  }
  return context;
};