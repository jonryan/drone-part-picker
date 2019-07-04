import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import FormErrors from '../FormErrors.js'
import {Container, Button, Table, Row, Col, Form} from 'react-bootstrap'
import {Field, Formik} from 'formik'
import ProductMerchantForm from "../Merchant/ProductMerchantForm";

const CheckboxInput = (props) => (
  <Field {...props} render={({field}) => {
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
              initialValues={{
                name: fc.name || '',
                description: fc.description || '',
                releaseDate: fc.releaseDate || '',
                uarts: fc.uarts || 0,
                weightInGrams: fc.weightInGrams || 0,
                cpu: fc.cpu || '',
                // releaseDateUpdated: fc.releaseDateUpdated || new Date(),
                dimensions: fc.dimensions || '',
                holePattern: fc.holePattern || '',
                voltageInputMin: fc.voltageInputMin || 0,
                voltageInputMax: fc.voltageInputMax || 0,
                osd: fc.osd || false,
                accelerometer: fc.accelerometer || false,
                barometer: fc.barometer || false,
                spektrumPort: fc.spektrumPort || false,
                usbInterface: fc.usbInterface || false,
                ledWS2812Support: fc.ledWS2812Support || false,
                rssiPad: fc.rssiPad || false,
                currentSensor: fc.currentSensor || false,
                accelerometer: fc.accelerometer || false,
                beeperPad: fc.beeperPad || false,
                beeperOnBoard: fc.beeperOnBoard || false,
                antiVibrationGrommets: fc.antiVibrationGrommets || false,
                builtInReceiver: fc.builtInReceiver || '',
              }}
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
                            required
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
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="uart">
                        <Form.Label>Number of UARTs</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="uarts"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="weightInGrams">
                        <Form.Label>Weight In Grams</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="weightInGrams"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="cpu">
                        <Form.Label>CPU</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="cpu"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="dimensions">
                        <Form.Label>Board Dimensions (mm)</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="dimensions"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="holePattern">
                        <Form.Label>Hole Pattern (mm)</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="holePattern"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>
                      <Form.Group controlId="voltageInputMin">
                        <Form.Label>Minimum Voltage Input</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="voltageInputMin"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                            required
                          />
                        </fieldset>
                      </Form.Group>

                      <Form.Group controlId="voltageInputMax">
                        <Form.Label>Maximum Voltage Input</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="voltageInputMax"
                            type="number"
                            className="form-control form-control-lg"
                            placeholder=""
                          />
                        </fieldset>
                      </Form.Group>

                      <Form.Group controlId="builtInReceiver">
                        <Form.Label>Built-In Receiver</Form.Label>
                        <fieldset className="form-group">
                          <Field
                            name="builtInReceiver"
                            component="select"
                            placeholder='WHAT?'
                            className="form-control"
                          >
                            <option value="">--- Select a Receiver Type --</option>
                            <option value="Spektrum">Spektrum</option>
                            <option value="FrSky">FrSky</option>
                            <option value="Crossfire">Crossfire</option>
                          </Field>
                        </fieldset>
                      </Form.Group>

                      <div className="form-check">
                        <CheckboxInput
                          name="osd"
                          className="form-check-input"
                        />
                        <label title="Built-in OSD" type="checkbox" className="form-check-label">
                          Built-in OSD
                        </label>
                      </div>

                      <div className="form-check">
                        <CheckboxInput
                          name="barometer"
                          className="form-check-input"
                        />
                        <label title="Built-in Barometer" type="checkbox"  className="form-check-label">
                          Built-in Barometer
                        </label>
                      </div>

                      <div className="form-check">
                        <CheckboxInput
                          name="spektrumPort"
                          className="form-check-input"
                        />
                        <label title="Spektrum Satellite Port" type="checkbox"  className="form-check-label">
                          Spektrum Satellite Port
                        </label>
                      </div>
                      <div className="form-check">
                        <CheckboxInput
                          name="usbInterface"
                          className="form-check-input"
                        />
                        <label title="USB Interface" type="checkbox"  className="form-check-label">
                          USB Interface
                        </label>
                      </div>
                      <div className="form-check">
                        <CheckboxInput
                          name="ledWS2812Support"
                          className="form-check-input"
                        />
                        <label title="LED WS2812 Support" type="checkbox"  className="form-check-label">
                          LED WS2812 Support
                        </label>
                      </div>
                      <div className="form-check">
                        <CheckboxInput
                          name="rssiPad"
                          className="form-check-input"
                        />
                        <label title="RSSI Pad" type="checkbox"  className="form-check-label">
                          RSSI Pad
                        </label>
                      </div>

                      <div className="form-check">
                        <CheckboxInput
                          name="currentSensor"
                          className="form-check-input"
                        />
                        <label title="Current Sensor" type="checkbox"  className="form-check-label">
                          Current Sensor
                        </label>
                      </div>
                      <div className="form-check">
                        <CheckboxInput
                          name="beeperOnBoard"
                          className="form-check-input"
                        />
                        <label title="On-Board Beeper" type="checkbox"  className="form-check-label">
                          On-Board Beeper
                        </label>
                      </div>
                      <div className="form-check">
                        <CheckboxInput
                          name="antiVibrationGrommets"
                          className="form-check-input"
                        />
                        <label title="Anti-Vibration Grommets" type="checkbox"  className="form-check-label">
                          Anti-Vibration Grommets
                        </label>
                      </div>

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
  fc: {},
}
export default FlightControllerForm;
