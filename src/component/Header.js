import Badge from '@mui/material/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { nav, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { Table } from '@mui/material';
import { Search } from '@mui/icons-material';

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const getData = useSelector((state) => state.shortlistReducer.Shortlists)
  console.log(getData)


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Rental</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="Home" className={"text-decoration-none text-light mx-3"}>Home</NavLink>
            <NavLink to="Listing" className={"text-decoration-none text-light mx-3"}>House List</NavLink>
            <NavLink to="Login" className={"text-decoration-none text-light mx-3"}>Login</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} class='text-light' >Shortlists...
            <i class="fa-regular fa-heart text-light" style={{ fontSize: 30, cursor: "pointer" }}></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
          getData.length ?
          <div className='card_details'style={{width:"24rem",padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.map((e)=>{
                    return(
                      <>
                        <tr>
                          <td>
                            <NavLink to={'/ShortList/${e.id}'} onClick={handleClose}>
                              <img src={e.addimg} style={{width:"5rem",height:"5rem"}} alt="House" />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.city}</p>
                            <p>rent: {e.rent}</p>
                          </td>
                          <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}} >
                            <p> <i className='fas fa-trash largetrash'></i> </p>
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>:

          <div className='card_details d-flex justify-content-center align-item-center' style={{width:"22rem",position:'Relative',padding:"10px"}} >
          <i className='fas fa-close smallclose' onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:20,cursor:'pointer'}} ></i>
            <p>No shortlisted Items</p>
          </div>
          }
        </Menu>
      </Navbar>
    </div>
  )
} 

export default Header