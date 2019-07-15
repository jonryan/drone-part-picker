import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Field} from 'formik';

export const FC_SIZE_OPTIONS = gql`
    query enumValuesOfMetaInformationTags {
        __type(name: "HoleSize") {
            name
            enumValues {
                name
            }
        }
    }
`
class HoleSizeDropdown extends Component {
  render() {

    return (
      <Query query={FC_SIZE_OPTIONS}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const values = data['__type'].enumValues

          return (
            <Form.Group controlId="holeSize">
              <Form.Label>Mounting Bolt Hole Size</Form.Label>
              <fieldset className="form-group">
                <Field
                  name='holeSize'
                  component="select"
                  className="form-control"
                >
                  <option value="">--- Select FC Bolt Hole Size --</option>
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
  }
}


export default HoleSizeDropdown;
