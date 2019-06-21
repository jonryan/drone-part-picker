import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FlightController extends Component {
  render() {
    let {fc} = this.props

    return (
      <div>
        I am a FC {fc.name} posted by {fc.postedBy.email}
      </div>
    );
  }
}

FlightController.propTypes = {};

export default FlightController;