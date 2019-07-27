import React from 'react';
import PropTypes from 'prop-types';
import {Container, Table, Card, Row, Col, ListGroup, Form } from 'react-bootstrap';
import {Query} from 'react-apollo';
import LoadingIndicatorCentered from './UsersPage.jsx';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import Page from '../../Page';
import moment from 'moment'

const GET_USER_QUERY = gql`
    query getUser($id: ID!){
        getUser(id: $id){
            id
            name
            email
            flightControllers{
                id, name, updatedAt
            }
            editedFlightControllers{
                id, name, updatedAt
            }
            addedMerchants{
                id, name, updatedAt
            }
            editedMerchants{
                id, name, updatedAt
            }
            role
        }
    }
`

const BasicStaticFormGroup = ({title, value}) => {
  return (
    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Form.Label column sm="1">
        {title}
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue={value} />
      </Col>
    </Form.Group>
  )
}

const BasicListCard = ({
   title, arrayOfThings, noItemsMessage, lineItems
}) => {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <ListGroup variant="flush">
        {arrayOfThings.length > 0 && (
          <React.Fragment>
            {arrayOfThings.map( (thing, index) => {
              return <ListGroup.Item key={index}>
                {lineItems(thing)}
              </ListGroup.Item>
            })}
          </React.Fragment>
        )}
        {arrayOfThings.length < 1 && (
          <ListGroup.Item>
            <h1 className="text-center">{noItemsMessage}</h1>
          </ListGroup.Item>
        )}

      </ListGroup>
    </Card>
  )
}

BasicListCard.defaultProps = {
  arrayOfThings: [],
  title: 'Placeholder Title',
  noItemsMessage: 'None'
}

const UserPage = props => {

  let {history, match: { params: {userId}}} = props;
  if(!userId){
    console.log('getting it off state');
    userId = props.location.state.merchant;
  }

  return (
    <Page title="View Users" className="editor-page">
      <Container fluid>
        <Query query={GET_USER_QUERY} variables={{id: userId}}>
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

            const user = data.getUser;
            console.log('users', user);

            return (
              <Container fluid className='mt-4'>

                <BasicStaticFormGroup
                  title='Name'
                  value={user.name}
                />
                <BasicStaticFormGroup
                  title='Email'
                  value={user.email}
                />
                <BasicStaticFormGroup
                  title='Role'
                  value={(user.role) ? user.role : 'Not Set'}
                />

                <Row>
                  <Col md={6}>
                    <BasicListCard
                      title='Added Flight Controllers'
                      arrayOfThings={user.flightControllers}
                      lineItems={(fc) => (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: `/flight-controller/${fc.id}`
                            }}>
                            {fc.name}
                          </Link> - {moment(fc.updatedAt).format('MMMM do YYYY')}
                        </React.Fragment>
                      )}
                    />
                  </Col>
                  <Col md={6}>
                    <BasicListCard
                      title='Edited Flight Controllers'
                      arrayOfThings={user.editedFlightControllers}
                      lineItems={(fc) => (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: `/flight-controller/${fc.id}`
                            }}>
                            {fc.name}
                          </Link> - {moment(fc.updatedAt).format('MMMM do YYYY')}
                        </React.Fragment>
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <BasicListCard
                      title='Merchants Added'
                      arrayOfThings={user.addedMerchants}
                      lineItems={(merchant) => (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: `/edit-merchant/${merchant.id}`
                            }}>
                            {merchant.name}
                          </Link> - {moment(merchant.updatedAt).format('MMMM do YYYY')}
                        </React.Fragment>
                      )}
                    />
                  </Col>
                  <Col md={6}>
                    <BasicListCard
                      title='Merchants Edited'
                      arrayOfThings={user.editedMerchants}
                      lineItems={(merchant) => (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: `/edit-merchant/${merchant.id}`
                            }}>
                            {merchant.name}
                          </Link> - {moment(merchant.updatedAt).format('MMMM do YYYY')}
                        </React.Fragment>
                      )}
                    />
                  </Col>
                </Row>
              </Container>
            )
          }}
        </Query>
      </Container>
    </Page>
  );
};

UserPage.propTypes = {

};

export default UserPage;
