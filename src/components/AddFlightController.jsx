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

  render() {

    const history = this.props.history

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
                  const { data } = await addFlightControllerEasy({ variables: { flightController: values } })

                  console.log('data', data)
                  setSubmitting(false)
                  // TODO: Get errors coming back from API in errors prop so they'll be picked up here
                  // setErrors(transformGraphQLErrors(data.addFlightControllerEasy.errors))
                  // if (!_.isEmpty(data.addFlightControllerEasy.errors)) return

                  // TODO: Figure out how to do this with the returne from my graphQL response
                  // const slug = _.get(data, 'createArticle.article.slug')
                  // history.push(`/flightcontroller/${slug}`)
                  history.push(`/products/flight-controller/1`)
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