import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {AUTH_TOKEN} from '../../../constants.js';
import AdminMenuItems from './AdminMenuItems.jsx';
// import Avatar from '../../Avatar'

const UserMenuItems = ({ user, history }) => {

  console.log('history', history, user)

  return ((
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Flight Controllers">
        <NavDropdown.Item href="/products/flight-controller/1">View Flight Controllers</NavDropdown.Item>
        <NavDropdown.Item href="/add-flight-controller">Add Flight Controller</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Merchants">
        <NavDropdown.Item href="/merchants">View Merchants</NavDropdown.Item>
        <NavDropdown.Item href="/add-merchant">Add Merchant</NavDropdown.Item>
      </NavDropdown>
      {user.role === 'ADMIN' && (
        <AdminMenuItems/>
      )}
    </Nav>

    <Nav>
      <Nav.Link
        onClick={() => {
          localStorage.removeItem(AUTH_TOKEN)
          window.location.reload()
        }}
        href="#">{user.name} Log Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
))
}

UserMenuItems.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
}

export default withRouter(UserMenuItems)
