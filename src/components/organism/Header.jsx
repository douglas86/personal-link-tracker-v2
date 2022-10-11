import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";

import { img, buttons } from "../atom";

import { links } from "../../utils/index";
import home from "../../assets/Images/home.jpeg";
import { signIn, signOut, useSession } from "next-auth/react";
import useAppContext from "../../hooks/useAppContext";

const Header = () => {
  const { data: session } = useSession();
  const { state } = useAppContext();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavbarBrand>{links("/", <a>{img(home, 30, 30)}</a>)}</NavbarBrand>
          <Nav className="ml-auto">
            {state &&
              links(
                `/${state.dataReducers.role}`,
                <Nav.Link>Dashboard</Nav.Link>
              )}
            {links("/user/link/create", <Nav.Link>Create a Link</Nav.Link>)}
            {!session
              ? buttons("outline-primary", "SignIn", () => signIn())
              : buttons("outline-success", "SignOut", () =>
                  signOut({ callbackUrl: `${window.location.origin}/` })
                )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
