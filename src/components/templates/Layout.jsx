import Header from "../organism/Header";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import useAppContext from "../../hooks/useAppContext";

const Layout = ({ children }) => {
  const userData = useFetch("/userData");
  const categoryData = useFetch("/category");
  const { dispatch } = useAppContext();

  useEffect(() => {
    if (userData && userData.length !== 0) {
      dispatch({
        type: "FETCHING_INITIAL_DATA",
        userData: userData[0],
        categoryData,
      });
    }
  }, [userData, categoryData]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
