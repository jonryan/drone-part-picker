import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Page from '../Page'
import {LINKS_PER_PAGE} from '../../constants.js';
import FlightController from './FlightController.jsx';
import {Container, Row, Col, Table, Form} from 'react-bootstrap'
import FlightControllerCard from "./FlightControllerCard";
import FlightControllerFiltersForm from './FlightControllerFiltersForm.jsx';
import styled from 'styled-components/macro'
import LoadingIndicatorCentered from '../LoadingIndicatorCentered.js';


const _ = require('underscore')


const FiltersSidebar = styled.div`
    width: 400px;
    border-right: 1px solid rgb(226, 226, 226);
    padding: 20px;
    
    h5{
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    
`



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
      viewMode: 'card',
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
      <Page title="View Flight Controllers" className="editor-page">
        <Container fluid className={'mt-4'}>
          <Row>
            <Col md={'auto'}>
              <FiltersSidebar>
                <h5>Filters:</h5>
                <div>
                  <FlightControllerFiltersForm
                    submitCB={this._updateFilters}
                  />
                </div>
              </FiltersSidebar>
            </Col>

            <Col>
              <Row className='mb-3'>
                <Col sm={12}>
                  <div className={'float-left'}>
                    <a
                      href='#'
                      className={(viewMode !== 'table' ? 'text-muted cursor-pointer' : 'text-primary')}
                      onClick={()=>this.setState({viewMode: 'table'})}>
                      <i className="fas fa-th-list" style={{fontSize: 20}}></i>
                    </a>
                  <span className='m-2' style={{fontSize: 25}}>|</span>
                    <a
                      href='#'
                      className={(viewMode !== 'card' ? 'text-muted cursor-pointer' : 'text-primary')}
                      onClick={()=>this.setState({viewMode: 'card'})}>
                      <i className="fas fa-th" style={{fontSize: 20}}></i>
                    </a>
                  </div>
                  <div className="float-right">
                    <Form.Control as="select" size='sm'>
                      <option value="">--- Sort By ---</option>
                      <option>Newest Added</option>
                      <option>Lowest Price</option>
                      <option>Highest Price</option>
                      <option>Most Popular</option>
                    </Form.Control>
                  </div>
                </Col>
              </Row>

            <Query query={FC_LIST_QUERY} variables={this._getQueryVariables()}>
              {({ loading, error, data, subscribeToMore }) => {

                console.log('error', error, data);
                if (loading) return (
                  <LoadingIndicatorCentered/>
                )
                if (error) return (
                  <div
                    className={'text-center mt-5'}
                  >
                    Error: {error}
                  </div>
                )

                const FCs = this._getFCsToRender(data)
                const pageIndex = this.props.match.params.page
                  ? (this.props.match.params.page - 1) * LINKS_PER_PAGE
                  : 0

                if(!FCs || FCs.length < 1){
                  return (
                    <h1 className="text-center">
                      Sorry, No Results Match Your Search.
                    </h1>
                  )
                }

                return (
                  <React.Fragment>
                    {viewMode === 'card' && (
                        <Row>
                          {FCs.map((fc, index) => (
                            <Col sm={1} md={6} lg={3} key={index}>
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
