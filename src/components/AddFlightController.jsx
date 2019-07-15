import React, {Component} from 'react';
import {Container, FormControl, Row, Col, Form} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import { transformGraphQLErrors } from './apolloHelpers'
import Page from '../components/Page'
import FlightControllerForm from "./FlightControllers/FlightControllerForm.jsx";
import {DataUtils} from '../DataUtils.js';
let _ = require('underscore')


const FC_MUTATION = gql`
    mutation addFlightController($flightController: AddFlightControllerInput!){
        addFlightController(flightController: $flightController){
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
        }
    }
`

class AddFlightController extends Component {

  render() {

    const history = this.props.history

    return (
      <Mutation mutation={FC_MUTATION}>
        {addFlightController => (
          <Page title="Flight Controller Edit" className="editor-page">
            <h1>Add New Flight Controller</h1>
            <FlightControllerForm
              fc={{

              }}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                console.log("values", values)


                values = DataUtils.cleansFlightControllerInput(values)
                const { data } = await addFlightController({ variables: { flightController: values } })

                console.log('data', data)
                setSubmitting(false)
                // TODO: Get errors coming back from API in errors prop so they'll be picked up here
                // setErrors(transformGraphQLErrors(data.addFlightController.errors))
                // if (!_.isEmpty(data.addFlightController.errors)) return

                // TODO: Figure out how to do this with the returne from my graphQL response
                // const slug = _.get(data, 'createArticle.article.slug')
                // history.push(`/flightcontroller/${slug}`)
                history.push(`/products/flight-controller/1`)
              }}
            />
          </Page>
        )}
      </Mutation>
    );
  }
}

AddFlightController.propTypes = {};

export default AddFlightController;
