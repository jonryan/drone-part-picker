import { NavLink } from 'react-router-dom'
import Menu from './Menu'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {AUTH_TOKEN} from "../../../constants";
import {
  Navbar, NavDropdown, Nav, Form, FormControl, Button,
} from 'react-bootstrap'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Drone Part Picker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* TODO: Incorporate the MENU here*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*<Nav.Link href="/">New</Nav.Link>*/}
            {/*<Nav.Link href="/top">Top</Nav.Link>*/}
            {/*<Nav.Link href="/create">Add Link</Nav.Link>*/}
            {/*<Nav.Link href="/search">Search</Nav.Link>*/}
            {authToken ? (
              <React.Fragment>
                <NavDropdown title="Flight Controllers">
                  <NavDropdown.Item href="/products/flight-controller/1">View Flight Controllers</NavDropdown.Item>
                  <NavDropdown.Item href="/add-flight-controller">Add Flight Controller</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Merchants">
                  <NavDropdown.Item href="/merchants">View Merchants</NavDropdown.Item>
                  <NavDropdown.Item href="/add-merchant">Add Merchant</NavDropdown.Item>
                </NavDropdown>
              </React.Fragment>
            ) : (
              <Nav.Link href="/products/flight-controller/1">Flight Controllers</Nav.Link>
            )}



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