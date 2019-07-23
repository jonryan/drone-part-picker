import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import {getLowestPrice} from "../../utils";

import styled, { createGlobalStyle } from 'styled-components/macro'
import FlightControllerForm from "./FlightControllerForm";

const FlightControllerCardContainer = styled.div`
  border: 1px solid #ececec;
  background-color: white;
  margin-bottom: 25px;
  box-shadow: 0px 1px 7px #e6e6e6;
  cursor: pointer;
`



const CardDetailsContainer = styled.div`
  padding: 5px 20px;
  position: relative;
  
  h5.card-title{
    color: #7b7b7b;
    font-weight: 300;
    height: 50px;
    overflow: hidden;
    line-height: 26px;
  }
`

const RatingIndicator = styled.span`
  background: #f6c57d;
  padding: 2px 10px;
  border-radius: 12px;
  color: white;
  white-space: nowrap;
  
  ::after {
    content: ' ★';
  }
`
const SmallMutedText = styled.span`
  font-size: 15px;
  color: #c1c1c1;
  white-space: nowrap;
`

const Price = styled.h5`
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
`

const Heart = styled.div`
  ::after{
    content: '♡';
    color: #ff5656;
    font-size: 27px;
    font-weight: lighter;
    cursor: pointer;
  }
  content: ' ♡';
    top: 5px;
    right: 5px;
    position:absolute;
    
`

const Badge = styled.div`
    
     
    background: ${
      props => {
        if (props.green) {
          return '#58C777';
        }
        else if (props.gold) {
          return '#f5bd69';
        }
        else if (props.blue) {
          return '#6ec1f2';
        }
      }
    };
    
    height: 36px;
    width: 161px;
    text-align: center;
    font-size: 20px;
    line-height: 38px;
    font-family: sans-serif;
    font-weight: 100;
    color: #FFF;
    -ms-transform: rotate(-45deg);
    position: absolute;
    top: 14px;
    left: -10px;
    box-shadow: 1px 1px 5px #bdbdbd;
    padding: 0;
    max-width: 71%;
    
    .underEdge{
      position: absolute;
      content: '';
      display: block;
      top: 36px;
      left: 1px;
      height: 8px;
      width: 8px;
      background: ${
  props => {
    if (props.green) {
      return 'linear-gradient(229deg,#5a926a 50%,rgba(90,146,106,0) 50.1%);';
    }
    else if (props.gold) {
      return 'linear-gradient(229deg,#6d5812 50%,rgba(90,146,106,0) 50.1%); ';
    }
    else if (props.blue) {
      return 'linear-gradient(229deg,#274c62 50%,rgba(90,146,106,0) 50.1%);';
    }
  }
  }; 
      }
`

const productImage = require('./fc.jpg')

class FlightControllerCard extends Component {

  constructor(props) {
    super(props);


  }


  goToFlightController(){
    window.location = `/flight-controller/${this.props.fc.id}`
  }

  render() {

    let {fc, filters} = this.props;

    return (
      <FlightControllerCardContainer className={'card'} onClick={()=> this.goToFlightController()}>
        <Badge blue>
          <div className="underEdge"></div>
          New!
        </Badge>
        <Heart/>
        <img className="card-img-top" src={require('./fc.jpg')} alt="Card image cap" />
        <CardDetailsContainer>

          <h5 className="card-title mb-3">{fc.name}</h5>
          <Row>
            <Col sm={6}>
              <RatingIndicator className='mr-2'>4.0</RatingIndicator>
              <br/>
              <SmallMutedText className="text-muted">(52 Reviews)</SmallMutedText>
            </Col>
            <Col sm={6} className='text-right'>
              <Price>{getLowestPrice(fc.merchantLinks)}</Price>
            </Col>
          </Row>
          <p className="card-text">{fc.description}</p>

        </CardDetailsContainer>
        {filters && (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Used in 120 Builds - View</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        )}

        <div className="card-footer text-muted">
          <div>
            <div className="float-right">

            </div>

            <span className={'float-right'}>Used in <b>15</b> Builds</span>
          </div>


        </div>
      </FlightControllerCardContainer>

    );
  }
}

FlightControllerCard.propTypes = {
  fc: PropTypes.object,

};

export default FlightControllerCard;
