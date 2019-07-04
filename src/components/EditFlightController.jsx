import React, {Component} from 'react';
import {Container} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import Page from '../components/Page'
import FlightControllerForm from './FlightControllers/FlightControllerForm.jsx'
let moment = require('moment')

const EDIT_FLIGHT_CONTROLLER = gql`
  mutation editFlightController($flightController: UpdateFlightControllerInput!){
    updateFlightController(flightController: $flightController){
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

const GET_FLIGHTCONTROLLER = gql`
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
      voltageInputMin
      voltageInputMax
      osd
      accelerometer
      barometer
      spektrumPort
      usbInterface
      ledWS2812Support
      rssiPad
      currentSensor
      beeperPad
      beeperOnBoard
      antiVibrationGrommets
      builtInReceiver
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


class EditFlightController extends Component {

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
      <Page title="Edit Flight Controller" className="editor-page">
        <h1>Edit Flight Controller</h1>
        <Query query={GET_FLIGHTCONTROLLER} variables={{id: fc}}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            console.log("FC Returned", data)
            data.getFlightController.releaseDate = moment(data.getFlightController.releaseDate).format('YYYY-MM-DD')

            return (
              <Mutation mutation={EDIT_FLIGHT_CONTROLLER}>
                {updateFlightController => (
                  <FlightControllerForm
                    fc={data.getFlightController}
                    onSubmit={async (values, { setSubmitting, setErrors }) => {
                      console.log('onSubmit', data, values)
                      values.id = data.getFlightController.id;
                      const { data: mutationData } = await updateFlightController({
                        variables: { flightController: values }
                      })

                      console.log('Result', mutationData)

                      setSubmitting(false)
                      history.push(`/products/flight-controller/1`)
                      // TODO: Figure out errors
                      // setErrors(transformGraphQLErrors(mutationData.updateFlightController.errors))
                      //
                      // if (!_.isEmpty(mutationData.updateFlightController.errors)) return
                      //
                      // const updatedSlug = _.get(mutationData, 'updateFlightController.article.slug')
                      // history.push(`/article/${updatedSlug}`)
                    }}
                  />
                )}
              </Mutation>
            )
          }}
        </Query>
      </Page>
    );
  }
}

EditFlightController.propTypes = {};

export default EditFlightController;