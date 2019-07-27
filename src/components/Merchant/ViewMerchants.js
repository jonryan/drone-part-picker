import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from "../Page/Page";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Container, Table,  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import LoadingIndicatorCentered from '../FlightControllers/FlightControllerList.jsx';

export const MERCHANT_LIST_QUERY = gql`
  query {
    merchantList{
      merchants {
        id
        name
        postedBy{
          id,
          name
        }
        updatedBy{
          id,
          name
        }
        affiliateId
        url
        disabled
      }
    }
  }
`


class ViewMerchants extends Component {

  _getMerchantsToRender = data => {
    console.log('data', data)
    return data.merchantList.merchants

  }

  render() {
    return (
      <Page title="Add Merchant" className="editor-page">
        <Container fluid>
          <h1>Merchant List</h1>
        <Query query={MERCHANT_LIST_QUERY}>
          {({ loading, error, data }) => {

            console.log('data', data)
            if (loading) return (
              <LoadingIndicatorCentered/>
            )
            if (error) return (
              <div className={'text-center mt-5'}>
                Error: {error}
              </div>
            )

            const merchants = this._getMerchantsToRender(data);

            return (
              <Container fluid className='mt-4'>


                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>URL</th>
                      <th>Affiliate ID</th>
                      <th>Disabled</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchants.map((merchant, index) => (
                      <tr key={index}>
                        <td>{merchant.name}</td>
                        <td>{merchant.url}</td>
                        <td>{merchant.affiliateId}</td>
                        <td>{merchant.disabled && '✅'}</td>
                        <td>
                          <Link
                            to={{
                              pathname: `/edit-merchant/${merchant.id}`
                            }}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            )


          }}
        </Query>
        </Container>
      </Page>
    );
  }
}

ViewMerchants.propTypes = {};

export default ViewMerchants;
