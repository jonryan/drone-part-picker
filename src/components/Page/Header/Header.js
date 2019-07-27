import Menu from './Menu'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Navbar } from 'react-bootstrap'

class Header extends Component {
  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Drone Part Picker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Menu/>
      </Navbar>
    )
  }
}

export default withRouter(Header)
