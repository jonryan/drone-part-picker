import React from 'react'
import WithUser from '../../WithUser'
import GuestMenuItems from './GuestMenuItems'
import UserMenuItems from './UserMenuItems'

const Menu = () => (
  <ul className="nav navbar-nav pull-xs-right">
    <WithUser>
      {viewer => (
        viewer ? <UserMenuItems user={viewer.user} /> : <GuestMenuItems />
      )}
    </WithUser>
  </ul>
)

export default Menu
