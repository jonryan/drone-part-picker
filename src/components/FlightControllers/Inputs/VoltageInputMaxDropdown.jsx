import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Field} from 'formik';


class VoltageInputMaxDropdown extends Component {
  render() {

    const values = [
      {
        actual: 2.5,
        display: '1S(5v)',
      },{
        actual: 5,
        display: '2S(10v)',
      },{
        actual: 7.5,
        display: '3S(15v)',
      },{
        actual: 10,
        display: '4S(20v)',
      },{
        actual: 12.5,
        display: '5S(25v)',
      },{
        actual: 15,
        display: '6S(30v)',
      },{
        actual: 17.5,
        display: '7S(35v)',
      },{
        actual: 17.5,
        display: '8S(40v)',
      },{
        actual: 17.5,
        display: '9S(45v)',
      },{
        actual: 17.5,
        display: '10S(50v)',
      },
    ]

    return (
      <Form.Group controlId="voltageInputMax">
        <Form.Label>Maximum Voltage In</Form.Label>
        <fieldset className="form-group">
          <Field
            name='voltageInputMax'
            component="select"
            className="form-control"
          >
            <option value="">--- Maximum Voltage In --</option>
            {values.map( (value, index) => (
              <option key={index} value={value.actual}>{value.display}</option>
            ))}
          </Field>
        </fieldset>
      </Form.Group>

    );
  }
}


export default VoltageInputMaxDropdown;
