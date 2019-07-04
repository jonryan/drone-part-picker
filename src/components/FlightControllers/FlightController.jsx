import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { Query } from 'react-apollo'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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

  _getLowestPrice = (prices) => {
    if(!prices || prices.length < 1){
      return "N/A"
    }
    let lowest = 99999999;
    prices.forEach((price, index) => {
      if(price.price < lowest){
        lowest = price.price
      }
    })
    return `$${lowest}`
  }

  render() {
    let {fc, deleteCB} = this.props

    return (
      <tr>
        <td>{fc.name}</td>
        <td>{fc.manufacturer}</td>
        <td>{this._getLowestPrice(fc.merchantLinks)}</td>
        <td>5 Stars</td>
        <td>13</td>
        <td>05/05/2019</td>
        <td>
          <Link
            to={{
              // state: {
              //   fc: fc.id
              // },
              pathname: `/edit-flight-controller/${fc.id}`
            }}>
            Edit
          </Link>
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