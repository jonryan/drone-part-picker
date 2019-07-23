import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import FlightControllerSizeDropdown from './Inputs/FlightControllerSizeDropdown.jsx';
import CheckboxFormInput from '../CheckboxFormInput.jsx';
import _ from 'underscore';
import ReceiverProtocolDropdown from './Inputs/ReceiverProtocolDropdown.jsx';
import styled from 'styled-components/macro'
import TooltipOsd from '../Tooltips/TooltipOSD.js';


const OutlineButton = styled.button`
  border: 1px solid grey;
  width: 100%;
  padding: 10px;
`

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
            osd: false,
            antiVibrationGrommets: false,
            barometer: false,
            spektrumPort: false,
            ledWS2812Support: false,
            beeperOnBoard: false,
            threeVoltOutput: false,
            cameraControl: false,
          }}
          onSubmit={(values, { setSubmitting }) => {
            values = {...values}
            setSubmitting(false)

            const booleanValuesNeedingCleared = [
              'osd', 'antiVibrationGrommets',
              'barometer',
              'spektrumPort',
              'ledWS2812Support',
              'beeperOnBoard',
              'threeVoltOutput',
              'cameraControl',
            ];

            _.each(booleanValuesNeedingCleared, (key) => {
              let value = values[key];
              console.log('booleanValuesNeedingCleared', key, value)
              value = (!value) ? undefined : value
              values[key] = value
            });
            console.log('finalVlues', values)
            values.voltageInputMax = (values.voltageInputMax.length < 1) ? undefined : values.voltageInputMax
            values.voltageInputMin = (values.voltageInputMin.length < 1) ? undefined : values.voltageInputMin

            this.props.submitCB(values)
          }}
          onError={(error, { setSubmitting }) => {
            console.log('error', error)
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

              <div className="form-check">
                <TooltipOsd>
                  <CheckboxFormInput
                    name='osd'
                    id='osd'
                    className="form-check-input"
                    label='Built-in OSD'
                  />
                </TooltipOsd>
              </div>

              <div className="form-check">
                <CheckboxFormInput
                  name='antiVibrationGrommets'
                  id='antiVibrationGrommets'
                  className="form-check-input"
                  label='Anti-Vibration Grommets'
                />
              </div>


              <div className="form-check">
                <CheckboxFormInput
                  name='barometer'
                  id='barometer'
                  className="form-check-input"
                  label='Barometer'
                />
              </div>

              <div className="form-check">
                <CheckboxFormInput
                  name='spektrumPort'
                  id='spektrumPort'
                  className="form-check-input"
                  label='Spektrum Satellite Port'
                />
              </div>

              <div className="form-check">
                <CheckboxFormInput
                  name='ledWS2812Support'
                  id='ledWS2812Support'
                  className="form-check-input"
                  label='LED WS2812 Support'
                />
              </div>


              <div className="form-check">
                <CheckboxFormInput
                  name='beeperOnBoard'
                  id='beeperOnBoard'
                  className="form-check-input"
                  label='Built-In Beeper'
                />
              </div>

              <div className="form-check">
                <CheckboxFormInput
                  name='threeVoltOutput'
                  id='threeVoltOutput'
                  className="form-check-input"
                  label='3v Output (For Spektrum Receivers)'
                />
              </div>

              <div className="form-check">
                <CheckboxFormInput
                  name='cameraControl'
                  id='cameraControl'
                  className="form-check-input"
                  label='Built-In Camera Control'
                />
              </div>

              <FlightControllerSizeDropdown/>

              <ReceiverProtocolDropdown/>

              {errors.minUarts && touched.minUarts && errors.minUarts}
              <OutlineButton type="submit" disabled={isSubmitting}>
                Submit
              </OutlineButton>
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
