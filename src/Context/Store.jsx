import { createContext, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

const initialState = { dataReducers: {} };

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
