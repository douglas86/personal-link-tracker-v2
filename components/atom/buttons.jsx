import { Button } from "react-bootstrap";

export const buttons = (variant, buttonName, clickHandler) => (
  <Button variant={variant} onClick={clickHandler}>
    {buttonName}
  </Button>
);
