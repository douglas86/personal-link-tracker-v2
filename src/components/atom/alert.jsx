import { Alert } from "react-bootstrap";

export const alert = (variant, message) => (
  <Alert variant={variant}>{message}</Alert>
);
