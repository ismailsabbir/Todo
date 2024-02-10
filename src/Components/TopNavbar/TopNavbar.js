import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const TopNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <h4 className="logo">Todo List</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className="nav_left">
              <div className="search_con">
                <input placeholder="Search" />
                <IoSearch className="search_icon" />
              </div>
              <IoIosNotifications className="notification" />
              <FaUserAlt className="user" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
