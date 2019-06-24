import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'

// type MyCustomInputThatIsDefinedInSchema {
//   name: String!
//   releaseDate: DateTime!
//   uarts: Int!
//   GyroOne: Float
//   GyroTwo: Float
//   weightInGrams: Float
//   cpu: String!
//   dimensions: String
//   holePattern: String!
//   voltageInputMin: Float!
//   voltageInputMax: Float!
//   osd: Boolean!
//   accelerometer: Boolean!
//   barometer: Boolean!
//   spektrumPort: Boolean!
//   usbInterface: Boolean!
//   LedWS2812Support: Boolean!
//   RSSIPad: Boolean!
//   currentSensor: Boolean!
//   beeperPad: Boolean!
//   beeperOnBoard: Boolean!
//   antiVibrationGrommets: Boolean!
//   builtInReceiver: String #"CROSSFIRE/DSMX/FRSKY"
//   postedBy: User!
//   ThreeVoltOutput: Boolean
//   FiveVoltOut: Boolean
//   CameraControl: Boolean
// }

// const FC_MUTATION = gql`
//   mutation FcMutation(
//     $name: String!,
//     $releaseDate: String,
//     $uarts: Int,
//     $weightInGrams: Float,
//     $cpu: String,
//     $dimensions: String,
//     $holePattern: String,
//     $voltageInputMin: Float,
//     $voltageInputMax: Float,
//     $osd: String,
//     $voltageInputMin: String,
//   ){
//     addFlightController(
//       name: $name, uarts: $uarts, r
//     ){
//       id
//       createdAt
//       url
//       description
//     }
//   }
// `

/*
mutation{
  addFlightController(
    name: "Whitenoise Synergy F4 AIO Flight Controller"
    releaseDate: "2019-06-20T14:54:14.338Z"
    uarts: 4
    weightInGrams: 7.5
    cpu: "F4"
    dimensions: "37x37"
    holePattern: "30.5x30.5"
    voltageInputMin: 9
    voltageInputMax: 28
    osd: true
    accelerometer: false
    spektrumPort: false
    barometer: false
    usbInterface: true
    RSSIPad: false,
    beeperPad: true,
    LedWS2812Support: true
    antiVibrationGrommets: false
    beeperOnBoard: false
    currentSensor: true
  ){
    id
    name
    uarts
  }
}
 */

class AddFlightController extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Add new flight controller</h1>


      </Container>
    );
  }
}

AddFlightController.propTypes = {};

export default AddFlightController;