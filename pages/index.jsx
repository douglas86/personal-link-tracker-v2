import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { Container } from "react-bootstrap";

import useAppContext from "../src/hooks/useAppContext";
import CategoryCards from "../src/components/organism/CategoryCards";

const Home = () => {
  const { state, dispatch } = useAppContext();

  const { alertsReducers } = state;

  useEffect(() => {
    if (alertsReducers) {
      setTimeout(() => dispatch({ type: "CHANGE_ALERT_STATUS" }), 2000);
    }
  }, []);

  return (
    <Container>
      {alertsReducers && alertsReducers.showAlert ? (
        <Alert variant={alertsReducers.status === 200 ? "primary" : "danger"}>
          {alertsReducers.message}
        </Alert>
      ) : null}
      <CategoryCards />
    </Container>
  );
};

export default Home;
