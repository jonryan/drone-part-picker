import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

const USER_FRAGMENT = gql`
  fragment WithViewer on Viewer {
    user {
      id
      username
      email
      image
      bio
    }
  }
`

const GET_VIEWER = gql`
  query Viewer {
    viewer {
      ...WithViewer
    }
  },
  ${USER_FRAGMENT}
`

const WithUser = ({ children }) => (
  <Query query={GET_VIEWER}>
    {({ loading, error, data }) => {
      if (loading || error) return null
      return children(data.viewer)
    }}
  </Query>
)

WithUser.propTypes = {
  children: PropTypes.func.isRequired
}

WithUser.fragments = {
  viewer: USER_FRAGMENT
}

export default WithUser
