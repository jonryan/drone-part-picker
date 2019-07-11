import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Form} from 'react-bootstrap';
import {Field} from 'formik';

export const FC_SIZE_OPTIONS = gql`
    query enumValuesOfMetaInformationTags {
        __type(name: "ReceiverProtocol") {
            name
            enumValues {
                name
            }
        }
    }
`
class ReceiverProtocolDropdown extends Component {
  render() {

    const displayValues= {
      CROSSFIRE: 'Crossfire',
      FRSKY: "FrSky",
      SPEKTRUM: "Spektrum",
      FLYSKY: "FlySky",
    }

    return (
      <Query query={FC_SIZE_OPTIONS}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const values = data['__type'].enumValues

          return (
            <Form.Group controlId="builtInReceiver">
              <Form.Label>Built in Receiver</Form.Label>
              <fieldset className="form-group">
                <Field
                  name="builtInReceiver"
                  component="select"
                  className="form-control"
                >
                  <option value="">--- Select a Receiver Type --</option>
                  {values.map( (value, index) => (
                    <option key={index} value={value.name}>{displayValues[value.name] || value.name}</option>
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


export default ReceiverProtocolDropdown;
