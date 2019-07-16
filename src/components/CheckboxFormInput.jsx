import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';


const CheckboxFormInput = (props) => (
  <div className={'mb-3'}>
    <Field {...props} render={({field}) => {
      field.value = field.value || false;
      return <input
        {...field}
        className={'form-check-input'}
        value={field.value}
        type="checkbox" checked={field.value} />
    } } />
    <label title={props.label} type="checkbox" className="form-check-label">
      {props.label}
    </label>
  </div>
);

CheckboxFormInput.propTypes = {};

export default CheckboxFormInput;
