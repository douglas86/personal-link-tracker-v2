import { Container, Navbar } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react";

import { images, buttons } from "../atom/index";

import home from "../../assets/Images/home.jpeg";

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          {images(home, 30, 30)}
          {!session
            ? buttons("outline-primary", "SignIn", () => signIn())
            : buttons("outline-success", "SignOut", () =>
                signOut({
                  callbackUrl: `${window.location.origin}/`,
                })
              )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
