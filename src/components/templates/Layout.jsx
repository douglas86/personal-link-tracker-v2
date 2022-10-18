import Header from "../organism/Header";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import useAppContext from "../../hooks/useAppContext";

const Layout = ({ children }) => {
  const userData = useFetch("/userData");
  const { dispatch } = useAppContext();

  useEffect(() => {
    if (userData && userData.length !== 0) {
      dispatch({ type: "FETCHING_USER_DATA", userData: userData[0] });
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
