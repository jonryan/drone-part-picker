import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {LINKS_PER_PAGE} from '../../constants.js';
import FlightController from './FlightController.jsx';
import {Container, Row, Col, Card, Table,} from 'react-bootstrap'

export const FC_LIST_QUERY  = gql`
  query{
    flightControllerFeed{
      flightControllers{
        id
        name
        releaseDate
        uarts
        id
        postedBy{
          email
        }
      }
      count
    }

  }
`

class FlightControllerList extends Component {

  _getQueryVariables = () => {

    const page = parseInt(this.props.match.params.page, 10)
    const skip = (page - 1) * LINKS_PER_PAGE
    const first = LINKS_PER_PAGE
    const orderBy = 'createdAt_DESC'
    return { first, skip, orderBy }
  }

  _nextPage = data => {
    const page = parseInt(this.props.match.params.page, 10)
    if (page <= data.flightControllerFeed.count / LINKS_PER_PAGE) {
      const nextPage = page + 1
      this.props.history.push(`/products/flight-controller/${nextPage}`)
    }
  }
  _previousPage = () => {
    const page = parseInt(this.props.match.params.page, 10)
    if (page > 1) {
      const previousPage = page - 1
      this.props.history.push(`/products/flight-controller/${previousPage}`)
    }
  }

  _getFCsToRender = data => {
    console.log('data', data);
    return data.flightControllerFeed.flightControllers
  }

  render() {

    return (
      <Query query={FC_LIST_QUERY} variables={this._getQueryVariables()}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const FCs = this._getFCsToRender(data)
          const pageIndex = this.props.match.params.page
            ? (this.props.match.params.page - 1) * LINKS_PER_PAGE
            : 0


          return (
            <Container fluid className={'mt-4'}>
              <Row>
                <Col md={'auto'}>
                  <Card style={{width: 400}}>
                    <Card.Header as="h5">Filters</Card.Header>
                    <Card.Body>
                      <Card.Title>Filters Header</Card.Title>
                      <Card.Text>
                        Filters will go here
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <div>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Manufacturer</th>
                          <th>Price</th>
                          <th>Rating</th>
                          <th>Number of Builds</th>
                          <th>Release Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {FCs.map((fc, index) => (
                          <FlightController
                            fc={fc}
                            key={index}
                            index={index + pageIndex}
                          />
                        ))}
                      </tbody>
                    </Table>

                    <div className="flex ml4 mv3 gray">
                      <div className="pointer mr2" onClick={this._previousPage}>
                        Previous
                      </div>
                      <div className="pointer" onClick={() => this._nextPage(data)}>
                        Next
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

          )
        }}
      </Query>

    );
  }
}

FlightControllerList.propTypes = {};

export default FlightControllerList;