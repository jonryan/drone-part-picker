import React, {Fragment} from 'react';
import {Container, Card, Row, Col, ListGroup, Form } from 'react-bootstrap';
import {Mutation, Query} from 'react-apollo';
import LoadingIndicatorCentered from './UsersPage.jsx';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import Page from '../../Page';
import moment from 'moment'
import UserRoleDropdown from './UserRoleDropdown.jsx';
import {Field, Formik} from 'formik';

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

const EDIT_USER_MUTATION = gql`
  mutation updateUser($user: UserEdit!){
      updateUser(user: $user){
          id
          name
          email
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
              <Mutation
                mutation={EDIT_USER_MUTATION}
                update={(store, {data: {updateUser}}) => {

                  // const localStoreData = store.readQuery({
                  //   query: MERCHANT_LIST_QUERY
                  // })
                  // let merchantList = localStoreData.merchantList.merchants
                  // let matchedInStore = _.findWhere(merchantList, {id: updateMerchant.id})
                  // matchedInStore = {...matchedInStore, ...updateMerchant}
                  // // _.findWhere(merchantList, {id
                  // // localStoreData.feed.links.unshift(post)
                  // store.writeQuery({
                  //   query: MERCHANT_LIST_QUERY,
                  //   localStoreData
                  // })
                  console.log('Updated, reload?', data, updateUser)
                }}
              >
                {updateUser => (

                  <Container fluid className='mt-4'>
                    <Formik
                      initialValues={{
                        name: user.name || '',
                        role: user.role || null,
                        disabled: user.disabled || undefined,
                      }}
                      onSubmit={async (values, { setSubmitting, setErrors }) => {
                        console.log('onSubmit', data, values)
                        values.id = data.getUser.id;
                        const { data: mutationData } = await updateUser({
                          variables: {user: values}
                        })
                        console.log('mutationData', data, mutationData)
                        //
                        setSubmitting(false)
                        // history.push(`/merchants`)
                      }}
                    >
                      {({values, isSubmitting, handleSubmit, setFieldValue, errors}) => (
                        <Fragment>
                          <form onSubmit={(formSubmitValues, anything) => {
                            handleSubmit(formSubmitValues);
                          }}>
                            <fieldset disabled={isSubmitting}>
                              <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Field
                                  name="name"
                                  type="text"
                                  autoComplete='off'
                                  className="form-control"
                                />
                              </Form.Group>
                              <BasicStaticFormGroup
                                title='Email'
                                value={user.email}
                              />

                              <UserRoleDropdown/>
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

                              <button type="submit" className="mt-3 btn btn-lg pull-xs-right btn-primary">
                                Save User
                              </button>
                            </fieldset>
                          </form>
                        </Fragment>
                      )}
                    </Formik>
                </Container>
              )}
              </Mutation>
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
