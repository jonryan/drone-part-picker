import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Field} from 'formik';


class VoltageInputMinDropdown extends Component {
  render() {


    const values = [
      {
        actual: 2.5,
        display: '1S (2.5v)',
      },{
        actual: 5,
        display: '2S(5v)',
      },{
        actual: 7.5,
        display: '3S(7.5v)',
      },{
        actual: 10,
        display: '4S(10v)',
      },{
        actual: 12.5,
        display: '5S(12.5v)',
      },{
        actual: 15,
        display: '6S(15v)',
      },{
        actual: 17.5,
        display: '7S(17.5v)',
      },
    ]

    return (
      <Form.Group controlId="voltageInputMin">
        <Form.Label>Minimum Voltage In</Form.Label>
        <fieldset className="form-group">
          <Field
            name='voltageInputMin'
            component="select"
            className="form-control"
          >
            <option value="">--- Minimum Voltage In --</option>
            {values.map( (value, index) => (
              <option key={index} value={value.actual}>{value.display}</option>
            ))}
          </Field>
        </fieldset>
      </Form.Group>

    );
  }
}


export default VoltageInputMinDropdown;
