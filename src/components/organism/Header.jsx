import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react";

import { images, buttons } from "../atom";

import { links } from "../../utils/index";
import home from "../../assets/Images/home.jpeg";

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavbarBrand>{links("/", <a>{images(home, 30, 30)}</a>)}</NavbarBrand>
          <Nav className="ml-auto">
            {session && links("/dashboard", <Nav.Link>Dashboard</Nav.Link>)}
            {links("/user/link/create", <Nav.Link>Create a Link</Nav.Link>)}
            {!session
              ? buttons("outline-primary", "SignIn", () => signIn())
              : buttons("outline-success", "SignOut", () =>
                  signOut({
                    callbackUrl: `${window.location.origin}/`,
                  })
                )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
