import Header from "../organism/Header";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import useAppContext from "../../hooks/useAppContext";

const Layout = ({ children }) => {
  const userData = useFetch("/userData");
  const { dispatch } = useAppContext();

  useEffect(() => {
    if (userData) {
      dispatch({ type: "fetching user data", userData: userData[0] });
    }
  }, [userData]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
