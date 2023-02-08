import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/card.css";
import { DLT } from "../../redux/action/action";
import { showToastRemoveMessage,showToastLogoutMessage } from "../Toast";

const Header = () => {

  const auth = sessionStorage.getItem("email");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(DLT(id));
    showToastRemoveMessage();
  };

  const shortlistedHouse = useSelector((state) => state.shortlistReducer.Shortlists);

  return (
    <div>
      {auth ? (
        <Navbar className="navbar" variant="dark">
          <Container className="nav-container">
            <Navbar.Brand className="brand-Text">Rental</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink
                to="/Listing"
                className={"text-decoration-none text-light mx-3"}
              >
                House List
              </NavLink>
              <NavLink
                to="/Login"
                onClick={showToastLogoutMessage}
                className={"text-decoration-none text-light mx-3"}
              >
                Logout
              </NavLink>
            </Nav>
            <Badge
              badgeContent={shortlistedHouse.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : null}
              aria-haspopup="true"
              aria-expanded={open ? "true" : null}
              onClick={handleClick}
              // class="text-light"
            >
              <i class="fa-regular fa-heart heart-badge"></i>
            </Badge>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {shortlistedHouse.length ? (
              <div className="card_details">
                <Table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shortlistedHouse.map((e) => {
                      return (
                        <>
                          <i
                            className="fas fa-close smallclose"
                            onClick={handleClose}
                          ></i>
                          <tr>
                            <td>
                              <NavLink
                                // to={`/ShortList/${e.id}`}
                                to={`/ShortList`}
                                onClick={handleClose}
                              >
                                <img
                                  src={e.addimg}
                                  className="shortlistimg"
                                  alt="House"
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>City: {e.city}</p>
                              <p>Rent: {e.rent}</p>
                              <p>Rooms: {e.type}</p>
                            </td>
                            <td className="trash">
                              <p>
                                <i
                                  onClick={() => del(e.id)}
                                  className="fas fa-trash largetrash"
                                ></i>
                              </p>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="card_details">
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                ></i>
                <p>No shortlisted Items</p>
              </div>
            )}
          </Menu>
        </Navbar>
      ) : (
        <Navbar className="navbar" variant="dark">
          <Container>
            <Navbar.Brand className="brand-Text">Rental</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink
                to="/Listing"
                className={"text-decoration-none text-light mx-3"}
              >
                House List
              </NavLink>
              <NavLink
                to="/Signup"
                className={"text-decoration-none text-light mx-3"}
              >
                Register
              </NavLink>
              <NavLink
                to="/Login"
                className={"text-decoration-none text-light mx-3"}
              >
                Login
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Header;