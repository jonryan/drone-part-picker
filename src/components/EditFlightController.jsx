import React, {Component} from 'react';
import {Container, FormControl, Row, Col, Form} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import {LINKS_PER_PAGE} from '../constants.js';
import { FC_LIST_QUERY } from './FlightControllers/FlightControllerList.jsx'
import flightControllerForm from './FlightControllers/FlightControllerForm.jsx'


const FC_MUTATION = gql`
  mutation addFlightController($flightController: FlightControllerInput!){
    addFlightControllerEasy(flightController: $flightController){
      id
      createdAt
      description
      postedBy{
        id,
        name,
        email
      }
    }
  }
`

const FC_QUERY = gql`
  query FcQuery($id: ID){
    getFlightController(id: $id){
      id,
      name
    }
  }
`


class AddFlightController extends Component {
  state = {
    name: 'Test',
    description: 'Test',
    releaseDate: '11/5/2017',
    uarts: 3,
    weightInGrams: 7.5,
    cpu: 'F7',
    releaseDateUpdated: new Date(),
    dimensions: '30.5x30.5',
    holePattern: '30.5x30.5',
    voltageInputMin: 5,
    voltageInputMax: 25,
    osd: true,

  }

  componentDidMount(){
    console.log('this.state', this.state, this.props);
    // If we're on the edit page for a FC
    if(this.props.location.state && this.props.location.state.fc){
      let fcId = this.props.location.state.fc;
      // const data = store.readQuery({
      //   query: FC_QUERY,
      //   variables: { first, skip, orderBy }
      // })
    }
  }

  render() {

    const {
      name, uarts, description, releaseDate, releaseDateUpdated,
      dimensions, voltageInputMax, voltageInputMin, osd, holePattern,
      cpu, weightInGrams,
    } = this.state

    let flightController = {...this.state}
    flightController.releaseDate = this.state.releaseDateUpdated;
    delete flightController.releaseDateUpdated;

    return (
      <Container fluid>
        <h1>Testing</h1>
        <Row>
          <Col>
            <Query query={FC_QUERY} variables={{id: this.props.location.state.fc}}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                return (
                  <flightControllerForm />
                )
              }}
            </Query>

          </Col>
        </Row>


      </Container>
    );
  }
}

AddFlightController.propTypes = {};

export default AddFlightController;