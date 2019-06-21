import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {Alert} from 'react-bootstrap'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <div className='text-center form-signin'>

          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">{login ? 'Login' : 'Sign Up'}</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Your email address"
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address" r
            equired=""
           autoFocus="" autoComplete="off"
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
                 id="inputPassword"
                 className="form-control"
                 placeholder="Password"
                 required="true"
                 value={password}
                 onChange={e => this.setState({ password: e.target.value })}
                 autoComplete="off"/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (

              <button
                onClick={mutation}
                className="btn btn-lg btn-primary btn-block"
                type="submit">
                {login ? 'login' : 'create account'}
              </button>
            )}
          </Mutation>

          <Alert variant={'success'} className={'mt-4'}>
            <a
              onClick={() => this.setState({ login: !login })}
              href={"#"}>
              {login
                ? 'Need to create an account?'
                : 'Already have an account?'}
            </a>
          </Alert>



      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login