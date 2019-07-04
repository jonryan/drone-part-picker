import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MerchantSelector extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <Form.Group controlId="builtInReceiver">
          <Form.Label>Merchant</Form.Label>
          <fieldset className="form-group">
            <Field
              name="merchant"
              component="select"
              className="form-control"
            >
              <option value="">--- Select a Merchant --</option>
              <option value="Spektrum">Spektrum</option>
              <option value="FrSky">FrSky</option>
              <option value="Crossfire">Crossfire</option>
            </Field>
          </fieldset>
        </Form.Group>
      </div>
    );
  }
}

MerchantSelector.propTypes = {};

export default MerchantSelector;
