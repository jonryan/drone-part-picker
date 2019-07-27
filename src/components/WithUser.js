import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

const GET_VIEWER = gql`
    query {
        me{
            email
            name
            id
        }
    }
`

const WithUser = ({ children }) => (
  <Query query={GET_VIEWER}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) { return children(null)}
      return children(data.me)
    }}
  </Query>
)

WithUser.propTypes = {
  children: PropTypes.func.isRequired
}

export default WithUser
