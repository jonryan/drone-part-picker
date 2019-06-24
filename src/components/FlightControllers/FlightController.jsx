import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FlightController extends Component {
  render() {
    let {fc} = this.props

    return (
      <tr>
        <td>{fc.name}</td>
        <td>{fc.manufacturer}</td>
        <td>$34.99</td>
        <td>5 Stars</td>
        <td>13</td>
        <td>05/05/2019</td>
      </tr>
    );
  }
}

FlightController.propTypes = {};

export default FlightController;