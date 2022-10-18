import { buttons, titles, links } from "../../src/components/atom";
import { Container } from "react-bootstrap";

const index = () => {
  return (
    <Container>
      {titles("Admin Dashboard")}
      {links(
        "/admin/category",
        buttons("outline-success", "Create a Category")
      )}
    </Container>
  );
};

export default index;
