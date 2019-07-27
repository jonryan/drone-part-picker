import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Field} from 'formik';

export const USER_ROLE_OPTIONS = gql`
    query enumValuesOfMetaInformationTags {
        __type(name: "Role") {
            name
            enumValues {
                name
            }
        }
    }
`

const UserRoleDropdown = props => {
  return (
    <Query query={USER_ROLE_OPTIONS}>
        {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const values = data['__type'].enumValues

          return (
            <Form.Group controlId="builtInReceiver">
              <Form.Label>User Role:</Form.Label>
              <fieldset className="form-group">
                <Field
                  name={'role'}
                  component="select"
                  className="form-control"
                >
                  <option value="">--- Select a Role --</option>
                  {values.map( (value, index) => (
                    <option key={index} value={value.name}>{value.name}</option>
                  ))}
                </Field>
              </fieldset>
            </Form.Group>
          )
        }}
      </Query>
  );
};

export default UserRoleDropdown;
