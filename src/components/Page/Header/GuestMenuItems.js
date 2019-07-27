import React, { Fragment } from 'react'
import {Nav} from 'react-bootstrap';

const GuestMenuItems = () => (
  <Fragment>
    <Nav className="mr-auto">
      <Nav.Link href="/products/flight-controller/1">Flight Controllers</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Fragment>
)

export default GuestMenuItems
