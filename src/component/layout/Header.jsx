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
import { DELETE } from "../../redux/action/action";
import Toast from "../Toast";

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

  const logout = () => Toast("Logged Out", "Warning");

  const deleteHouse = (id) => {
    dispatch(DELETE(id));
    Toast("Item Removed", "error");
  };

  const shortlistedHouse = useSelector(
    (state) => state.shortlistReducer.Shortlists
  );

  return (
    <div className="sticky">
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
                onClick={logout}
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
                    {shortlistedHouse.map((houses) => {
                      return (
                        <>
                          <i
                            className="fas fa-close smallclose"
                            onClick={handleClose}
                          ></i>
                          <tr>
                            <td>
                              <NavLink
                                to={`/ShortList/${houses.id}`}
                                // to={`/ShortList/`}
                                onClick={handleClose}
                              >
                                <img
                                  src={houses.addimg}
                                  className="shortlistimg"
                                  alt="House"
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>City: {houses.city}</p>
                              <p>Rent: {houses.rent}</p>
                              <p>Rooms: {houses.type}</p>
                            </td>
                            <td className="trash">
                              <p>
                                <i
                                  onClick={() => deleteHouse(houses.id)}
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
