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
      <div></div>
    )
  }
}

export default withRouter(Header)