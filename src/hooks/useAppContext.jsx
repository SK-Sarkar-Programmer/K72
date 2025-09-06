import { createContext, useContext } from "react";

export const AppContext = createContext(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppContext;
