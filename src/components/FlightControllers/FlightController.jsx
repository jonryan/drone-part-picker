import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { Query } from 'react-apollo'
import PropTypes from 'prop-types';

export const FC_DELETE_MUTATION = gql`
  mutation deleteFlightController($id: ID!){
    deleteFlightController(
      id: $id
    ){
      id
    }
  }
`

class FlightController extends Component {
  render() {
    let {fc, deleteCB} = this.props

    return (
      <tr>
        <td>{fc.name}</td>
        <td>{fc.manufacturer}</td>
        <td>$34.99</td>
        <td>5 Stars</td>
        <td>13</td>
        <td>05/05/2019</td>
        <td>
          <a href="#" >
            Edit
          </a>
          <Mutation
            mutation={FC_DELETE_MUTATION}
            variables={{ id: fc.id }}
            update={(store, data) => {
              this.props.updateStoreAfterDelete(store, fc.id)
            }}
          >
            {deleteFlightController => (
              <a href="#" onClick={deleteFlightController}>
                Delete
              </a>
            )}
          </Mutation>


        </td>
      </tr>
    );
  }
}

FlightController.propTypes = {
  updateStoreAfterDelete: PropTypes.func
};

export default FlightController;