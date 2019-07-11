import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import FlightControllerSizeDropdown from './Inputs/FlightControllerSizeDropdown.jsx';

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
            voltageInputMax: '',
            voltageInputMin: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            values = {...values}
            setSubmitting(false)

            values.voltageInputMax = (values.voltageInputMax.length < 1) ? undefined : values.voltageInputMax
            values.voltageInputMin = (values.voltageInputMin.length < 1) ? undefined : values.voltageInputMin

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
              <Form.Group>
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

              <Form.Group>
                <Form.Label>Voltage Input Minimum</Form.Label>
                <input
                  type="number"
                  name="voltageInputMin"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='form-control'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Voltage Input Maximum</Form.Label>
                <input
                  type="number"
                  name="voltageInputMax"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='form-control'
                />
              </Form.Group>

              <FlightControllerSizeDropdown/>

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
