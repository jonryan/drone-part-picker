import React from 'react'
import WithUser from '../../WithUser'
import GuestMenuItems from './GuestMenuItems'
import UserMenuItems from './UserMenuItems'

const Menu = () => (
  <WithUser>
    {user => {
      return (
        user ? <UserMenuItems user={user} /> : <GuestMenuItems />
      )}
    }
  </WithUser>
)

export default Menu
