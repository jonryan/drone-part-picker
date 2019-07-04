import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import FormErrors from '../FormErrors'
import {Button, Modal, Form} from 'react-bootstrap'
import {Field, Formik} from 'formik'
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import {GET_FLIGHTCONTROLLER} from '../EditFlightController'
const _ = require('underscore')

const CheckboxInput = (props) => (
  <Field {...props} render={({field}) => {
    return <input
      {...field}
      className={'form-check-input'}
      type="checkbox" checked={field.value} />
  } } />
);


const PRODUCT_MERCHANT_MUTATION = gql`
  mutation AddProductMerchantLink($flightControllerMerchantLink: AddFlightControllerMerchantLink!){
    addFlightControllerMerchantLink(flightControllerMerchantLink: $flightControllerMerchantLink) {
      id
    }
  }
`

const PRODUCT_MERCHANT_DELETE_MUTATION = gql`
  mutation DeleteProductMutationLink($id: ID!){
    deleteFlightControllerMerchantLink(id: $id) {
      id
    }
  }
`

class ProductMerchantForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let { productMerchant, flightControllerId, history } = this.props

    return (
      <>
        <Mutation mutation={PRODUCT_MERCHANT_MUTATION}>
          {AddProductMerchantLink => (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              <Formik
                initialValues={{
                  flightControllerId: flightControllerId,
                  merchantId: (productMerchant.merchant && productMerchant.merchant.id) ? productMerchant.merchant.id : '',
                  inStock: productMerchant.inStock || true,
                  url: productMerchant.url || '',
                  price: productMerchant.price || 0,
                }}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                  const { data: mutationData } = await AddProductMerchantLink({
                    variables: { flightControllerMerchantLink: values }
                  })

                  setSubmitting(false)
                  window.location.reload()
                }}
              >
                {({values, isSubmitting, handleSubmit, setFieldValue, errors}) => (
                  <Fragment>
                    <FormErrors errors={errors}/>
                    <form onSubmit={(formSubmitValues, anything) => {
                      console.log('formSubmitValues', formSubmitValues, anything);
                      handleSubmit(formSubmitValues);
                    }}>
                      <fieldset disabled={isSubmitting}>
                        <Modal.Body>
                          <Form.Group controlId="Price">
                            <Form.Label>Merchant ID</Form.Label>
                            <Field
                              name="merchantId"
                              type="text"
                              autoComplete='off'
                              className="form-control"
                              placeholder=""
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="Price">
                            <Form.Label>Price</Form.Label>
                            <Field
                              name="price"
                              type="number"
                              autoComplete='off'
                              className="form-control"
                              placeholder=""
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="Price">
                            <Form.Label>Link</Form.Label>
                            <Field
                              name="url"
                              type="text"
                              autoComplete='off'
                              className="form-control"
                              placeholder=""
                              required
                            />
                          </Form.Group>
                          <div className="form-check">
                            <CheckboxInput
                              name="inStock"
                              className="form-check-input"
                            />
                            <label title="In Stock" type="checkbox"  className="form-check-label">
                              In Stock
                            </label>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                          </Button>

                          {productMerchant && productMerchant.id && (
                            <Mutation
                              mutation={PRODUCT_MERCHANT_DELETE_MUTATION}
                              update={(store, data) => {
                                // Find the item in the store by id, and remove it
                                const deletedMerchantLink = data.data.deleteFlightControllerMerchantLink;
                                let localStoreData = store.readQuery({
                                  query: GET_FLIGHTCONTROLLER,
                                  variables: { id: flightControllerId }
                                })
                                localStoreData.getFlightController.merchantLinks = _.reject(
                                  localStoreData.getFlightController.merchantLinks, (link) => {
                                    return link.id === deletedMerchantLink.id
                                  }
                                )
                                store.writeQuery({
                                  query: GET_FLIGHTCONTROLLER,
                                  variables: { id: flightControllerId },
                                  localStoreData
                                })
                              }}>
                              {deleteMerchant => (
                                <Button variant="danger" onClick={async () => {
                                  let result = await deleteMerchant({
                                    variables: {id: productMerchant.id}
                                  });
                                  this.props.handleClose();
                                }}>
                                  Delete
                                </Button>
                              )}

                            </Mutation>
                          )}
                          <Button type="submit" variant="primary">
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </fieldset>
                    </form>
                  </Fragment>
                )}
              </Formik>
            </Modal>
          )}
        </Mutation>

      </>
    );
  }
}

ProductMerchantForm.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  productMerchant: PropTypes.object,
  flightControllerId: PropTypes.string,
};

ProductMerchantForm.defaultProps = {
  productMerchant: {}
}

export default ProductMerchantForm;
