import { Container, Navbar } from "react-bootstrap";

import { images } from "../atom/images";

import home from "../../assets/Images/home.jpeg";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>{images(home, 30, 30)}</Container>
      </Navbar>
    </>
  );
};

export default Header;
