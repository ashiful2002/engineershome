import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems } from "../Constants/Index.js";
import { Outlet } from "react-router-dom";

import logo from "../assets/EHC.png";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        collapseOnSelect
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="engineers home logo" className="" width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-2 rounded">
              {navItems.map((item) => (
                <Nav.Link className="capitalize " key={item.id} href={item.url}>
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
