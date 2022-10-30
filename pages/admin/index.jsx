import { buttons, heading, links } from "../../src/components/atom";
import { Container } from "react-bootstrap";

const index = () => {
  return (
    <Container>
      {heading("Admin Dashboard")}
      {links("/admin/category", buttons("outline-success", "Create a Slug"))}
    </Container>
  );
};

export default index;
