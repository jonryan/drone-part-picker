import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import {Field} from 'formik';

export const FC_SIZE_OPTIONS = gql`
    query enumValuesOfMetaInformationTags {
        __type(name: "HolePattern") {
            name
            enumValues {
                name
            }
        }
    }
`
class FlightControllerSizeDropdown extends Component {
  render() {

    const displayValues= {
      SIXTEEN: "16x16mm",
      TWENTY: "20x20mm",
      THIRTY: "30x30mm",
    }

    return (
      <Query query={FC_SIZE_OPTIONS}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const values = data['__type'].enumValues
          console.log('data', data, data['__type'].enumValues);

          return (
            <Form.Group controlId="holePattern">
              <Form.Label>Hole Pattern (mm)</Form.Label>
              <fieldset className="form-group">
                <Field
                  name="holePattern"
                  component="select"
                  className="form-control"
                >
                  <option value="">--- Select a Hole Pattern--</option>
                  {values.map( (value, index) => (
                    <option key={index} value={value.name}>{displayValues[value.name]}</option>
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


export default FlightControllerSizeDropdown;
