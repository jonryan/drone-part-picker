import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import {getLowestPrice} from "../../utils";

const productImage = require('./fc.jpg')
require('./FlightControllerCard.scss')

class FlightControllerCard extends Component {
  render() {

    let {fc} = this.props;

    return (
      <div className="card flight-controller-card">
        <img className="card-img-top" src={require('./fc.jpg')} alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{fc.name}</h4>
          <h5>{getLowestPrice(fc.merchantLinks)}</h5>
          <p className="card-text">{fc.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-footer text-muted">
          <div>
            <div className="float-right">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={3.5}
              />
            </div>

            <span className={'float-right'}>16 reviews</span>
          </div>


        </div>

      </div>

    );
  }
}

FlightControllerCard.propTypes = {
  fc: PropTypes.object,

};

export default FlightControllerCard;
