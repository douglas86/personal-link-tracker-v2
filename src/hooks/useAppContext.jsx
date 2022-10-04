import { useContext } from "react";
import { Context } from "../Context/Store";

const useAppContext = () => {
  return useContext(Context);
};

export default useAppContext;
