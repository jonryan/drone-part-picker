import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap'
import {Field, Formik} from 'formik'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

export const GET_MERCHANTS = gql`
    query merchantList{
        merchantList{
            merchants {
              id
              name
              disabled    
            }
            
        }
    }
`


class MerchantSelector extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Query query={GET_MERCHANTS}>
              {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>
                console.log('data', data)
                const merchants = data.merchantList.merchants;
                return (
                  <Form.Group controlId="builtInReceiver">
                    <Form.Label>Merchant</Form.Label>
                    <fieldset className="form-group">
                      <Field
                        name={this.props.name}
                        component="select"
                        className="form-control"
                      >
                        <option value="">--- Select a Merchant --</option>
                        {merchants.map( (merchant, index)=> {
                          if(!merchant.disabled){
                            return <option key={index} value={merchant.id}>{merchant.name}</option>
                          }
                        })}
                      </Field>
                    </fieldset>
                  </Form.Group>
                )
              }}
        </Query>
      </div>
    );
  }
}

MerchantSelector.propTypes = {
  name: PropTypes.string
};

MerchantSelector.defaultProps = {
  name: 'merchantId'
}

export default MerchantSelector;
