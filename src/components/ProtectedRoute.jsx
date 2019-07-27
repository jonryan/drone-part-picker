import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {AUTH_TOKEN} from '../constants.js';
const authToken = localStorage.getItem(AUTH_TOKEN)

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log('ProtectedRoute', authToken, Component)
  return (
    <Route {...rest} render={(props) => (
      (authToken) ?
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )} />
  );
}

export default ProtectedRoute
