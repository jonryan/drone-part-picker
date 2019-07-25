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
import VoltageInputMinDropdown from './Inputs/VoltageInputMinDropdown.jsx';
import VoltageInputMaxDropdown from './Inputs/VoltageInputMaxDropdown.jsx';
import {DataUtils} from '../../DataUtils.js';
import gql from 'graphql-tag'
import {Query} from 'react-apollo';
import {FC_SIZE_OPTIONS} from './Inputs/GyroDropdown.jsx';
import BaroDropdown from './Inputs/BaroDropdown.jsx';
import CpuDropdown from './Inputs/CpuDropdown.jsx';
import GyroDropdown from './Inputs/GyroDropdown.jsx';

export const GET_FLIGHTCONTROLLER_FILTER_INPUTS = gql`
    query enumValuesOfMetaInformationTags {
        __type(name: "FlightControllerFilter") {
        name
        inputFields{
          name,
          type{
            name
          }
        }
      }
    }
`



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
        <Query query={GET_FLIGHTCONTROLLER_FILTER_INPUTS}>
        {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          console.log('data', data)
          const formInputFieldSchema = data['__type'].inputFields



          return (
            <Formik
              initialValues={{
                minUarts: 0,
                voltageInputMax: '',
                voltageInputMin: '',
                osd: false,
                antiVibrationGrommets: false,
                spektrumPort: false,
                ledWS2812Support: false,
                beeperOnBoard: false,
                threeVoltOutput: false,
                cameraControl: false,
              }}
              onSubmit={(values, { setSubmitting }) => {
                values = {...values}
                setSubmitting(false)

                // Loop over the values. For each one find it in the formInputFieldSchema.
                // If it's a boolean && !True, clear it

                console.log('formInputFieldSchema', formInputFieldSchema)
                Object.keys(values).map( (key, index) => {
                  console.log('key', key, values[key])
                  let value = values[key]


                  let found = _.findWhere(formInputFieldSchema, {name: key})
                  if(!found){ return; }
                  let type = found.type.name;
                  console.log('found', found, type);
                  if(type === 'Boolean'){
                    values[key] = (!value) ? undefined : value;
                  }else if(type === 'Int' || type === 'Float'){
                    values[key] = (value.length < 1) ? undefined : parseFloat(value)
                  }else if(type === 'String'){
                    values[key] = (value.length < 1) ? undefined : value
                  }else{
                    if(!value || value.length < 1){
                      values[key] = undefined
                    }
                  }

                  console.log('value', value)
                })


                // DataUtils.cleanInputs(values)

                console.log('finalVlues', values)
                // values.voltageInputMax = (values.voltageInputMax.length < 1) ? undefined : values.voltageInputMax
                // values.voltageInputMin = (values.voltageInputMin.length < 1) ? undefined : values.voltageInputMin

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
                    <VoltageInputMinDropdown/>
                  </Form.Group>

                  <Form.Group>
                    <VoltageInputMaxDropdown/>
                  </Form.Group>


                  <CpuDropdown/>

                  <GyroDropdown
                      fieldName='gyroOne'
                      displayValue='Gyro'
                    />

                  <BaroDropdown/>

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
                      name='fiveVoltOutput'
                      id='fiveVoltOutput'
                      className="form-check-input"
                      label='5v Output (For Spektrum Receivers)'
                    />
                  </div>

                  <div className="form-check">
                    <CheckboxFormInput
                      name='eightVoltOutput'
                      id='eightVoltOutput'
                      className="form-check-input"
                      label='8v Output (For Spektrum Receivers)'
                    />
                  </div>

                  <div className="form-check">
                    <CheckboxFormInput
                      name='nineVoltOutput'
                      id='nineVoltOutput'
                      className="form-check-input"
                      label='9v Output (For Spektrum Receivers)'
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
          )
        }}
      </Query>
      </div>
    );
  }
}

FlightControllerFiltersForm.propTypes = {
  submitCB: PropTypes.func
};

export default FlightControllerFiltersForm;
