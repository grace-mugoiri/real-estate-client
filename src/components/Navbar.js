import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button,} from 'react-bootstrap';

const NavBar = () => {
  const currentUser = sessionStorage.getItem('current_user');
  const handleLogout = () => {
    sessionStorage.removeItem('current_user');
    window.location.href = '/login';
  };
  return (
    <div className="navbar">
      { currentUser
        ? (<Link to="" onClick={handleLogout}> Logout </Link>)
        : (
          <>
            <NavLink to="/login"> Login </NavLink>
            <NavLink to="/signup"> Signup </NavLink>
          </>
        )}

      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavLink to="/about"> About </NavLink>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
