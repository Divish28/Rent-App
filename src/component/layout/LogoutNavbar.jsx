import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/card.css";

const LogoutNavbar = () => {

  return (
    <div>
        <Navbar className="navbar" variant="dark">
          <Container>
            <Navbar.Brand className="brand-Text">
              Rental
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink
                to="/Listing"
                className={
                  "text-decoration-none text-light mx-3"
                }
              >
                House List
              </NavLink>
              <NavLink
                to="/Signup"
                className={
                  "text-decoration-none text-light mx-3"
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/Login"
                className={
                  "text-decoration-none text-light mx-3"
                }
              >
                Login
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default LogoutNavbar