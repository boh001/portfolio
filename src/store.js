import React, { createContext, useContext } from "react";

const PageContext = createContext();

export const Page = ({ active, setActive, children }) => {
  return (
    <PageContext.Provider value={{ active, setActive }}>
      {children}
    </PageContext.Provider>
  );
};
export const useActive = () => {
  return useContext(PageContext);
};
