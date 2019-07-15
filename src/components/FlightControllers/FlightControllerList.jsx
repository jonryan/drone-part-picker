import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Page from '../Page'
import {LINKS_PER_PAGE} from '../../constants.js';
import FlightController from './FlightController.jsx';
import {Container, Row, Col, Card, Table,} from 'react-bootstrap'
import FlightControllerCard from "./FlightControllerCard";
import FlightControllerFiltersForm from './FlightControllerFiltersForm.jsx';
const _ = require('underscore')

export const FC_LIST_QUERY  = gql`
    query flightControllerFilter($flightControllerFilter: FlightControllerFilter!){
        flightControllerFilter(flightControllerFilter: $flightControllerFilter){
            flightControllers{
                id
                name
                releaseDate
                uarts
                weightInGrams
                cpu
                dimensions
                holePattern
                voltageInputMin
                voltageInputMax
                osd
                barometer
                spektrumPort
                ledWS2812Support
                builtInReceiver
                threeVoltOutput
                postedBy{
                    id
                }
                updatedBy{
                    id
                    email
                }
                createdAt
                updatedAt
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
            count
        }
    }
`

class FlightControllerList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flightControllerFilter: {},
      viewMode: 'table',
    }
  }


  _getQueryVariables = () => {
    return {
      flightControllerFilter: this.state.flightControllerFilter
    }
  }

  _updateStoreAfterDelete = (store, fcId) => {
    const page = parseInt(this.props.match.params.page, 10)
    const skip = (page - 1) * LINKS_PER_PAGE
    const first = LINKS_PER_PAGE
    const orderBy = 'createdAt_DESC'
    const data = store.readQuery({
      query: FC_LIST_QUERY,
      variables: { first, skip, orderBy }
    })

    data.flightControllerFilter.flightControllers = _.reject(data.flightControllerFilter.flightControllers, fc => fc.id === fcId);
    data.flightControllerFilter.count = data.flightControllerFilter.count - 1;
    store.writeQuery({ query: FC_LIST_QUERY, data })
  }

  _nextPage = data => {
    const page = parseInt(this.props.match.params.page, 10)
    if (page <= data.flightControllerFilter.count / LINKS_PER_PAGE) {
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

  _updateFilters = data => {
    console.log('_updateFilters data', data)
    this.setState({flightControllerFilter: data})
  }

  _getFCsToRender = data => {
    console.log('data', data);
    return data.flightControllerFilter.flightControllers
  }
  render() {

    const {viewMode} = this.state
    return (
      <Page title="Add Merchant" className="editor-page">
        <Container fluid className={'mt-4'}>
          <Row>
            <Col md={'auto'}>
              <Card style={{width: 400}}>
                <Card.Header as="h5">Filters</Card.Header>
                <Card.Body>
                  <FlightControllerFiltersForm
                    submitCB={this._updateFilters}
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Row className='mb-5'>
                <Col sm={12}>
  <div className={'float-right'}>
                  <span onClick={()=>this.setState({viewMode: 'table'})}>
                    Table View
                  </span>
                <span className='m-3'>|</span>
                  <span onClick={()=>this.setState({viewMode: 'card'})}>
                    Card View
                  </span>
                </div>
                </Col>
              </Row>

            <Query query={FC_LIST_QUERY} variables={this._getQueryVariables()}>
              {({ loading, error, data, subscribeToMore }) => {

                console.log('error', error, data);
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const FCs = this._getFCsToRender(data)
                const pageIndex = this.props.match.params.page
                  ? (this.props.match.params.page - 1) * LINKS_PER_PAGE
                  : 0


                return (
                  <React.Fragment>
                    {viewMode === 'card' && (
                        <Row>
                          {FCs.map((fc, index) => (
                            <Col sm={1} md={6} lg={4} key={index}>
                              <FlightControllerCard
                                fc={fc}
                                key={index}
                                index={index + pageIndex}
                              />
                            </Col>
                          ))}

                        </Row>
                    )}

                    {viewMode === 'table' && (
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
                              <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {FCs.map((fc, index) => (
                              <FlightController
                                fc={fc}
                                key={index}
                                index={index + pageIndex}
                                updateStoreAfterDelete={this._updateStoreAfterDelete}
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
                    )}

                  </React.Fragment>
                )
              }}
            </Query>
          </Col>





          </Row>
        </Container>

      </Page>

    );
  }
}

FlightControllerList.propTypes = {};

export default FlightControllerList;
