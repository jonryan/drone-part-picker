import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {AUTH_TOKEN} from "../constants";
import {
  Navbar, NavDropdown, Nav, Form, FormControl, Button,
} from 'react-bootstrap'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">New</Nav.Link>
            <Nav.Link href="/top">Top</Nav.Link>
            <Nav.Link href="/create">Add Link</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/products/flight-controller/1">Flight Controllers</Nav.Link>
          </Nav>
          <Nav>
            {authToken ? (
              <Nav.Link
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/`)
                }}
                href="#">Log Out</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(Header)