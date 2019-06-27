import React, {Component} from 'react';
import {Container, FormControl, Row, Col, Form} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {LINKS_PER_PAGE} from '../constants.js';
import { FC_LIST_QUERY } from './FlightControllers/FlightControllerList.jsx'


const FC_MUTATION = gql`
  mutation FcMutation($flightController: FlightControllerInput!){
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
            <form>
              <Form.Group controlId="fcName">
                <Form.Label>FC Name</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ name: e.target.value })}
                  value={name} type="text" placeholder="FC Name" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ description: e.target.value })}
                  value={description} type="text" />
              </Form.Group>

              <Form.Group controlId="cpu">
                <Form.Label>CPU</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ cpu: e.target.value })}
                  value={cpu} type="text" />
              </Form.Group>

              <Form.Group controlId="weight">
                <Form.Label>Weight in Grams</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ weightInGrams: e.target.value })}
                  value={weightInGrams} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Board Dimensions (mm)</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ dimensions: e.target.value })}
                  value={dimensions} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Hole Pattern (mm)</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ holePattern: e.target.value })}
                  value={holePattern} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Voltage Input Min (Volts)</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ voltageInputMin: e.target.value })}
                  value={voltageInputMin} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Voltage Input Max (Volts)</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ voltageInputMax: e.target.value })}
                  value={voltageInputMax} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Check
                  type='checkbox'
                  id={`onboardOSD`}
                  onChange={e => this.setState({ osd: e.target.value })}
                  value={osd}
                  label={`On-Board OSD`}
                />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>UARTs</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ uarts: e.target.value })}
                  value={uarts} type="text" />
              </Form.Group>

              <Form.Group controlId="fcName">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  onChange={e => {
                    this.setState({
                      releaseDate: e.target.value,
                      releaseDateUpdated: new Date(e.target.value + " 00:00:00")
                    })
                  }}
                  placeholder='11/05/2018'
                  value={releaseDate} type="text" />
              </Form.Group>
            </form>



            <Mutation
              mutation={FC_MUTATION}
              variables={{
                flightController
              }}
              onCompleted={() => this.props.history.push('/products/flight-controller/1')}
              update={(store, { data: { flightController } }) => {
                const first = LINKS_PER_PAGE
                const skip = 0
                const orderBy = 'createdAt_DESC'
                const data = store.readQuery({
                  query: FC_LIST_QUERY,
                  variables: { first, skip, orderBy }
                })
                data.feed.links.unshift(flightController)
                store.writeQuery({
                  query: FC_LIST_QUERY,
                  data,
                  variables: { first, skip, orderBy }
                })
              }}
            >
              {(fcMutation) => (
                <button onClick={fcMutation}>
                  Submit
                </button>
              )}
            </Mutation>
          </Col>
        </Row>


      </Container>
    );
  }
}

AddFlightController.propTypes = {};

export default AddFlightController;