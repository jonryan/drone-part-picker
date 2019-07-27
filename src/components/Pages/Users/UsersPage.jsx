import React, {Component} from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'
import {Container, Table} from 'react-bootstrap';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import LoadingIndicatorCentered from '../../LoadingIndicatorCentered.js';
import Page from '../../Page';

const GET_USERS_QUERY = gql`
    query {
        userList{
            users{
                name
                id
                role
                email
                links{
                    url
                }
                flightControllers{
                    id
                    name
                }
                addedMerchants{
                    id
                    name
                }
                editedMerchants{
                    id
                    name
                }
                editedFlightControllers{
                    id
                    name
                }
            }
        }
    }
`


class UsersPage extends Component {
  render() {
    return (
      <Page title="View Users" className="editor-page">
        <Container fluid>
          <h1>Users List</h1>
          <Query query={GET_USERS_QUERY}>
            {({ loading, error, data }) => {

              console.log('data', data)
              if (loading) return (
                <LoadingIndicatorCentered/>
              )
              if (error) return (
                <div className={'text-center mt-5'}>
                  Error: {error}
                </div>
              )

              const users = data.userList.users;
              console.log('users', users);

              return (
                <Container fluid className='mt-4'>
                  <Table striped bordered hover>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>FC Added</th>
                      <th>Merchants Added</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <Link
                            to={{
                              pathname: `/user/${user.id}`
                            }}>
                            {user.id}
                          </Link>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                        <td>{user.flightControllers.length}</td>
                        <td>{user.addedMerchants.length}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </Container>
              )
            }}
          </Query>
        </Container>
      </Page>
    );
  }
}

UsersPage.propTypes = {};

export default UsersPage;
