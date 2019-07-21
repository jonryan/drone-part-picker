import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import FormErrors from '../FormErrors.js'
import {Container, Button, Table, Row, Col, Form} from 'react-bootstrap'
import {Field, Formik} from 'formik'
import ProductMerchantForm from "../Merchant/ProductMerchantForm";
import FlightControllerSizeDropdown from './Inputs/FlightControllerSizeDropdown.jsx';
import ReceiverProtocolDropdown from './Inputs/ReceiverProtocolDropdown.jsx';
import CheckboxFormInput from '../CheckboxFormInput.jsx';
import GyroDropdown from './Inputs/GyroDropdown.jsx';
import HoleSizeDropdown from './Inputs/HoleSizeDropdown.jsx';
import VoltageInputMinDropdown from './Inputs/VoltageInputMinDropdown.jsx';
import CpuDropdown from './Inputs/CpuDropdown.jsx';
import BaroDropdown from './Inputs/BaroDropdown.jsx';
import VoltageInputMaxDropdown from './Inputs/VoltageInputMaxDropdown.jsx';

const CheckboxInput = (props) => (
  <Field {...props} render={({field}) => {
    console.log('field', field);
    return <input
      {...field}
      className={'form-check-input'}
      type="checkbox" checked={field.value} />
  } } />
);

class FlightControllerForm extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      showMerchantLinkModal: false,
      merchantToEdit: {},
    }
  }

  _openMerchantLinkModal =() => {
    this.setState({
      merchantToEdit: {},
      showMerchantLinkModal: true
    })
  }
  _hideMerchantLinkModal =() => {
    this.setState({
      showMerchantLinkModal: false
    })
  }

  render() {

    let {fc, onSubmit} = this.props;
    let {showMerchantLinkModal} = this.state

    return (
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{...fc}}
              onSubmit={onSubmit}
            >
              {({values, isSubmitting, handleSubmit, setFieldValue, errors}) => (
                <Fragment>
                  <FormErrors errors={errors}/>
                  <form onSubmit={(formSubmitValues, anything) => {
                    console.log('formSubmitValues', formSubmitValues, anything);
                    handleSubmit(formSubmitValues);
                  }}>
                    <fieldset disabled={isSubmitting}>
                      <Form.Group controlId="name">
                        <Form.Label>Flight Controller Name</Form.Label>
                        <Field
                          name="name"
                          type="text"
                          autoComplete='off'
                          className="form-control"
                          placeholder="Flight Controller Name"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="description"
                            component="textarea"
                            className="form-control"
                            rows="8"
                            placeholder="Tell a little about the flight controller"
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="releaseDate">
                        <Form.Label>Release Date</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="releaseDate"
                            type="date"
                            className="form-control form-control-lg"
                          />
                        </fieldset>
                      </Form.Group>

                      <hr/>

                      <h4>Size & Weight</h4>
                      <Form.Group controlId="weightInGrams">
                        <Form.Label>Board Weight (g)</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="weightInGrams"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                          />
                        </fieldset>
                      </Form.Group>
                      <HoleSizeDropdown/>
                      <FlightControllerSizeDropdown />
                      <Form.Group controlId="dimensions">
                        <Form.Label>Board Dimensions (mm)</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="dimensions"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                          />
                        </fieldset>
                      </Form.Group>

                      <hr/>

                      <h4>Voltages</h4>
                      <VoltageInputMinDropdown/>
                      <VoltageInputMaxDropdown/>
                      <Form.Group controlId="threeVoltOutput">
                        <Form.Label>3V Output in Amps - Default to 0.1 if unknown - 1A = 1000mA</Form.Label>
                        <Field
                          name="threeVoltOutput"
                          type="number"
                          className="form-control"
                        />
                      </Form.Group>
                      <Form.Group controlId="fiveVoltOutput">
                        <Form.Label>5V Output in Amps - Default to 0.1 if unknown - 1A = 1000mA</Form.Label>
                        <Field
                          name="fiveVoltOutput"
                          type="number"
                          className="form-control"
                        />
                      </Form.Group>
                      <Form.Group controlId="eightVoltOutput">
                        <Form.Label>8V Output in Amps - Default to 0.1 if unknown - 1A = 1000mA</Form.Label>
                        <Field
                          name="eightVoltOutput"
                          type="number"
                          className="form-control"
                        />
                      </Form.Group>
                      <Form.Group controlId="nineVoltOutput">
                        <Form.Label>9V Output in Amps - Default to 0.1 if unknown - 1A = 1000mA</Form.Label>
                        <Field
                          name="nineVoltOutput"
                          type="number"
                          className="form-control"
                        />
                      </Form.Group>

                      <div className="form-check">
                        <CheckboxFormInput
                          name='pdb'
                          id='pdb'
                          className="form-check-input"
                          label='PDB Included'
                        />
                      </div>

                      {values.pdb && (
                        <div>
                          <Form.Group controlId="currentSensorRating">
                            <Form.Label>Maximum Current Rating in A - 100 = 100A</Form.Label>
                            <Field
                              name="currentSensorRating"
                              type="number"
                              className="form-control"
                            />
                          </Form.Group>
                        </div>
                      )}

                      <hr/>

                      <h4>Hardware</h4>
                      <CpuDropdown/>
                      <GyroDropdown fieldName={'gyroOne'} displayValue={'Primary Gyro'}/>
                      <GyroDropdown fieldName={'gyroTwo'} displayValue={'Secondary Gyro'}/>
                      <Form.Group controlId="uart">
                        <Form.Label>Number of UARTs</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="uarts"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                          />
                        </fieldset>
                      </Form.Group>
                      <ReceiverProtocolDropdown/>
                      <BaroDropdown/>
                      <div className="form-check">
                        <CheckboxFormInput
                          name='osd'
                          id='osd'
                          className="form-check-input"
                          label='Built-in OSD'
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
                          label='On-Board Beeper'
                        />
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
                          name='cameraControl'
                          id='cameraControl'
                          className="form-check-input"
                          label='Built-In Camera Control'
                        />
                      </div>

                      <div className="form-check">
                        <CheckboxFormInput
                          name='fourInOneConnector'
                          id='fourInOneConnector'
                          className="form-check-input"
                          label='4-in-1 Connector'
                        />
                      </div>

                      <div className="form-check">
                        <CheckboxFormInput
                          name='sdCardSlot'
                          id='sdCardSlot'
                          className="form-check-input"
                          label='SD-Card Slot'
                        />
                      </div>


                      <Form.Group controlId="onBoardFlash">
                        <Form.Label>On-Board Flash in  megabytes - 200 === 200mb</Form.Label>
                        <Field
                          name="onBoardFlash"
                          type="number"
                          className="form-control"
                        />
                      </Form.Group>

                      <hr/>


                      {fc.id && (
                        <React.Fragment>
                          <h3>
                            Merchant Links
                            <Button onClick={()=> this._openMerchantLinkModal()} className='float-right' variant="primary">Add New Price</Button>
                          </h3>
                          {fc.merchantLinks && (
                            <>
                              <Table>
                                <thead>
                                <tr>
                                  <th>
                                    Store
                                  </th>
                                  <th>
                                    Price
                                  </th>
                                  <th>
                                    URL
                                  </th>
                                  <th>
                                    In Stock
                                  </th>
                                  <th>
                                    Update
                                  </th>
                                </tr>

                                </thead>
                                <tbody>
                                { fc.merchantLinks.map((merchantLink, index)=> (
                                  <tr key={index}>
                                    <td>{merchantLink.merchant.name}</td>
                                    <td>${merchantLink.price}</td>
                                    <td>{merchantLink.url}</td>
                                    <td>{merchantLink.inStock && (
                                      <span>yes</span>
                                    )}</td>
                                    <td>
                                      <a href="#" onClick={()=> {
                                        this.setState({
                                          merchantToEdit: merchantLink,
                                          showMerchantLinkModal: true
                                        })
                                      }}>Update</a>
                                    </td>
                                  </tr>
                                ))}
                                </tbody>
                              </Table>
                            </>
                          )}
                        </React.Fragment>
                      )}

                      <button type="submit" className="btn btn-lg pull-xs-right btn-primary">
                        Save Flight Controller
                      </button>
                    </fieldset>
                  </form>
                </Fragment>
              )}
            </Formik>


            <ProductMerchantForm
              flightControllerId={fc.id}
              productMerchant={this.state.merchantToEdit}
              handleClose={this._hideMerchantLinkModal}
              handleSave={()=> {}}
              show={showMerchantLinkModal}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

FlightControllerForm.propTypes = {
  fc: PropTypes.object,
  onSubmit: PropTypes.func,
};

FlightControllerForm.defaultProps = {
  fc: {
    description: '',
    pdb: false,

  },
}
export default FlightControllerForm;
