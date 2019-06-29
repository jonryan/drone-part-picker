import React, {Component} from 'react';
import {Container, FormControl, Row, Col, Form} from 'react-bootstrap'
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import { transformGraphQLErrors } from './apolloHelpers'
import Page from '../components/Page'
import FlightControllerForm from "./FlightControllers/FlightControllerForm.jsx";
let _ = require('underscore')

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
        <Mutation mutation={FC_MUTATION}>
          {addFlightControllerEasy => (
            <Page title="Flight Controller Edit" className="editor-page">
              <FlightControllerForm
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                  console.log("values", values)
                  values.releaseDate = new Date(values.releaseDate + " 00:00:00")
                  const { data } = await addFlightControllerEasy({ variables: { values } })

                  setSubmitting(false)
                  setErrors(transformGraphQLErrors(data.createArticle.errors))

                  if (!_.isEmpty(data.createArticle.errors)) return

                  // TODO: Figure out how to do this with the returne from my graphQL response
                  // const slug = _.get(data, 'createArticle.article.slug')
                  // history.push(`/article/${slug}`)
                }}
              />
            </Page>
          )}
        </Mutation>


      </Container>
    );
  }
}

AddFlightController.propTypes = {};

export default AddFlightController;