import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import FormErrors from '../FormErrors'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {Field, Formik} from 'formik'

const CheckboxInput = (props) => (
  <Field {...props} render={({field}) => {
    return <input
      {...field}
      className={'form-check-input'}
      type="checkbox" checked={field.value} />
  } } />
);

class MerchantForm extends Component {
  render() {

    let {merchant, onSubmit} = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                name: merchant.name || '',
                url: merchant.url || '',
                affiliateId: merchant.affiliateId || '',
                disabled: merchant.disabled || false,
              }}
              onSubmit={onSubmit}
            >
              {({values, isSubmitting, handleSubmit, setFieldValue, errors}) => (
                <Fragment>
                  <FormErrors errors={errors}/>
                  <form onSubmit={(formSubmitValues, anything) => {
                    handleSubmit(formSubmitValues);
                  }}>
                    <fieldset disabled={isSubmitting}>
                      <Form.Group controlId="name">
                        <Form.Label>Merchant Name</Form.Label>
                        <Field
                          name="name"
                          type="text"
                          autoComplete='off'
                          className="form-control"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="affiliateId">
                        <Form.Label>Affiliate ID</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="affiliateId"
                            type="text"
                            autoComplete='off'
                            className="form-control"
                            rows="8"
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="url">
                        <Form.Label>URL (http://www.google.com)</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="url"
                            type="text"
                            autoComplete='off'
                            className="form-control"
                            rows="8"
                            required
                          />
                        </fieldset>
                      </Form.Group>

                      <div className="form-check">
                        <CheckboxInput
                            name="disabled"
                            className="form-check-input"
                          />
                          <label title="Disabled"
                                 type="checkbox" className="form-check-label">
                            Disabled
                          </label>
                      </div>

                      <button type="submit" className="mt-3 btn btn-lg pull-xs-right btn-primary">
                        Save Merchant
                      </button>
                    </fieldset>
                  </form>
                </Fragment>
              )}
            </Formik>

            <h3 className='mt-5'>Flight Controllers</h3>
            {merchant.flightControllers && merchant.flightControllers.length > 0 && (
              <ul>
                {merchant.flightControllers.map((fc, index)=> (
                  <li>
                    {fc.flightController.name} - {fc.price} - {fc.url}
                  </li>
                ))}
              </ul>
            )}



          </Col>
        </Row>
      </Container>
    );
  }
}

MerchantForm.propTypes = {
  merchant: PropTypes.object,
  onSubmit: PropTypes.func,
};

MerchantForm.defaultProps = {
  merchant: {},
}
export default MerchantForm;