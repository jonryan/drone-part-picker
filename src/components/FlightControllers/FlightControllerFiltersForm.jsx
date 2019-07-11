import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';

import PropTypes from 'prop-types';

class FlightControllerFiltersForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {}
    }
  }


  render() {

    const {filters} = this.state

    return (
      <div>
        <Formik
          initialValues={{
            minUarts: 0,
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            this.props.submitCB(values)
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Minimum UARTs</Form.Label>
                <input
                  type="number"
                  name="minUarts"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='form-control'
                />
              </Form.Group>
              {errors.minUarts && touched.minUarts && errors.minUarts}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

FlightControllerFiltersForm.propTypes = {
  submitCB: PropTypes.func
};

export default FlightControllerFiltersForm;
