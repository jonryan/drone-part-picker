import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Container, Row, Col, ListGroup, Card, Button, } from 'react-bootstrap'
import {Query} from 'react-apollo'
import Page from '../../components/Page'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {AUTH_TOKEN} from '../../constants.js'
import BoardDimensionsDisplay from './BoardDimensionsDisplay.jsx';
import {RatingIndicator, InStock} from '../StyledComponents/StoreComponents.js';
import CustomBreadcrumb from '../CustomBreadcrumb.js';
import LoadingIndicatorCentered from '../LoadingIndicatorCentered.js';

let moment = require('moment')
const authToken = localStorage.getItem(AUTH_TOKEN)

export const GET_FLIGHTCONTROLLER = gql`
    query getFlightController($id: ID!){
        getFlightController(id: $id){
            id
            name
            disabled
            releaseDate
            uarts
            gyroOne
            gyroTwo
            weightInGrams
            cpu
            dimensions
            description
            holePattern
            onBoardFlash
            voltageInputMin
            voltageInputMax
            osd
            threeVoltOutput
            fiveVoltOutput
            eightVoltOutput
            nineVoltOutput
            cameraControl
            pdb
            barometer
            spektrumPort
            ledWS2812Support
            beeperOnBoard
            antiVibrationGrommets
            builtInReceiver
            sdCardSlot
            fourInOneConnector
            currentSensorRating
            maxCurrent
            holeSize
            postedBy{
                id
                name
                email
            }
            merchantLinks{
                id
                price
                url
                inStock
                merchant{
                    id
                    name
                }
            }
        }
    }
`



const WhereToBuyList = ({links}) => {
  console.log('links', links)
  links = links || [];
  return (
    <Card>
      <Card.Header>Where to buy?</Card.Header>
      <Card.Body>
        {links.length > 0 && (
          <ListGroup variant="flush">
            {links.map((link, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col>
                    {link.merchant.name}
                    <RatingIndicator className='ml-2'>3.3</RatingIndicator>
                  </Col>
                  <Col sm={'auto'}><b>${link.price}</b></Col>
                  <Col sm={'auto'}><InStock inStock={link.inStock}/></Col>

                  <Col sm={'auto'}>
                    <a href={link.url} className={'mr-1'}>
                      <Button size='sm' variant="secondary" target='_blank'>Go</Button>
                    </a>
                    <a>
                      <Button size='sm' target='_blank'>Add to Build</Button>
                    </a>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className='text-center'>
              <a href="#">🤔 Tell us if we're missing a Merchant or if something is incorrect</a>
            </ListGroup.Item>
          </ListGroup>
        )}
        {links.length < 1 && (
          <h5 className='text-center'>🤔 No Prices added yet, <a href="#">Tell us if we're missing one!</a></h5>
        )}
      </Card.Body>
    </Card>
  )
}

class ViewFlightController extends Component {

  render() {
    //
    // let flightController = {...this.state}
    // flightController.releaseDate = this.state.releaseDateUpdated;
    // delete flightController.releaseDateUpdated;

    // ({ history, match: { params: { slug } } })
    let {history, match: { params: { fc } }} = this.props;
    console.log('this.props.location.state', this.props.location, this.props.history, this.props.match.params.fc)
    if(!fc){
      fc = this.props.location.state.fc;
    }



    console.log("fc", fc);


    return (
      <Page title="Flight Controller" className="editor-page">

        <Container>
            <Query query={GET_FLIGHTCONTROLLER} variables={{id: fc}}>
              {({ loading, error, data }) => {
                if (loading) return <LoadingIndicatorCentered/>
                if (error) return <div>Error</div>

                console.log('data.getFlightController.releaseDate', data.getFlightController.releaseDate);
                if(data.getFlightController.releaseDate){
                  data.getFlightController.releaseDate = moment(data.getFlightController.releaseDate).format('YYYY-MM-DD')
                }
                console.log('data.getFlightControlle', data.getFlightController)
                const flightController = data.getFlightController;

                return (
                  <React.Fragment>
                    <CustomBreadcrumb
                      links={[
                        {
                          name: 'Flight Controllers',
                          url: '/products/flight-controller/1',
                        },{
                          name: flightController.name
                        }
                      ]}
                    />

                    {authToken && (
                      <div className="">
                        <Link to={`/edit-flight-controller/${flightController.id}`}>
                          <Button>Edit</Button>
                        </Link>
                      </div>
                    )}
                    <Row>
                      <Col sm={4}>
                        <Row>
                          <Col sm={12}>
                            <img
                              width="100%"
                              src="https://cdn.getfpv.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/stax-main-1.jpg" alt=""/>
                          </Col>
                        </Row>
                        <Row>
                          {/*Thumbnails*/}
                        </Row>
                      </Col>
                      <Col sm={8}>
                        <h2>{flightController.name}</h2>
                        <p>
                          The Stax Combo by XILO is a high performance F4 Flight Controller paired with a 45A 32bit 6s 4-in-1 ESC. The plug and play connection makes it easy to install and use on your favorite airframe
                        </p>

                        <WhereToBuyList links={flightController.merchantLinks}></WhereToBuyList>


                      </Col>
                    </Row>

                    <hr/>

                    {/* Part Details */}
                    <Card >
                    <Card.Header>Part Details</Card.Header>
                      <Card.Body>
                        <Card.Title>Size & Weight</Card.Title>
                        <ListGroup variant="flush" className='mb-5'>
                          <ListGroup.Item>Weight: {flightController.uarts}g</ListGroup.Item>
                          <ListGroup.Item>Mounting Hole Size: {flightController.holeSize ? flightController.holeSize : 'Unknown'} </ListGroup.Item>
                          <ListGroup.Item>Hole Pattern: <BoardDimensionsDisplay size={flightController.holePattern}/></ListGroup.Item>
                          <ListGroup.Item>Board Dimensions: {flightController.dimensions ? `${flightController.dimensions}mm` : ''}</ListGroup.Item>
                        </ListGroup>
                        <Card.Title>Voltages</Card.Title>
                        <ListGroup variant="flush" className='mb-5'>
                          <ListGroup.Item>Minimum Voltage In: {flightController.voltageInputMin}v</ListGroup.Item>
                          <ListGroup.Item>Maximum Voltage In: {flightController.voltageInputMax}v</ListGroup.Item>
                          <ListGroup.Item>3V Output: {flightController.threeVoltOutput ? (<span>{flightController.threeVoltOutput} Amps</span>) : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>5V Output: {flightController.fiveVoltOutput ? (<span>{flightController.fiveVoltOutput} Amps</span>) : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>8V Output: {flightController.eightVoltOutput ? (<span>{flightController.eightVoltOutput} Amps</span>) : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>9V Output: {flightController.nineVoltOutput ? (<span>{flightController.nineVoltOutput} Amps</span>) : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>PDB: {flightController.pdb ? (<span>✅</span>) : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>PDB Max Current Rating: {flightController.pdb ? (<span>{flightController.maxCurrent ? flightController.maxCurrent : 'Unknown'}</span>) : (<span>n/a</span>)}</ListGroup.Item>
                        </ListGroup>
                        <Card.Title>Hardware</Card.Title>
                        <ListGroup variant="flush" className='mb-5'>
                          <ListGroup.Item>CPU: {flightController.cpu ? flightController.cpu : 'Unknown'}</ListGroup.Item>
                          <ListGroup.Item>Primary Gyro: {flightController.gyroOne ? flightController.gyroOne : 'Unknown'}</ListGroup.Item>
                          <ListGroup.Item>Secondary Gyro: {flightController.gyroTwo ? flightController.gyroTwo : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item># of UARTS:  {flightController.uarts}</ListGroup.Item>
                          <ListGroup.Item>Barometer:  {flightController.barometer ? flightController.barometer : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>Built-in Receiver:  {flightController.builtInReceiver}</ListGroup.Item>
                          <ListGroup.Item>Built-In OSD:  {flightController.osd ? '✅' : (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>Spektrum Satellite Port:  {flightController.spektrumPort ? '✅' : ''}</ListGroup.Item>
                          <ListGroup.Item>LED WS2812 Support:  {flightController.ledWS2812Support ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>On-Board Beeper:  {flightController.beeperOnBoard ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>4-in-1 Connector:  {flightController.fourInOneConnector ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>Built-In Camera Control:  {flightController.cameraControl ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>SD-Card Slot:  {flightController.sdCardSlot ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>On-Board Flash: {flightController.onBoardFlash ? flightController.onBoardFlash :  (<span>❌</span>)}</ListGroup.Item>
                          <ListGroup.Item>Anti-Vibration Grommets:  {flightController.antiVibrationGrommets ? '✅' :  (<span>❌</span>)}</ListGroup.Item>
                        </ListGroup>
                      </Card.Body>

                  </Card>
                  </React.Fragment>

                )
              }}
            </Query>
        </Container>
      </Page>
    );
  }
}

ViewFlightController.propTypes = {};

export default ViewFlightController;
