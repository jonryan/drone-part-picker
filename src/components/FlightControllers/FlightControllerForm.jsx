import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FC_LIST_QUERY} from "./FlightControllerList";
import {LINKS_PER_PAGE} from "../../constants";
import FormErrors from '../FormErrors.js'
import {Container, FormControl, Row, Col, Form} from 'react-bootstrap'
import { Field, Formik } from 'formik'

class FlightControllerForm extends Component {


  render() {

    let { fc, onSubmit } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                name: fc.name || 'Test',
                description: fc.description || 'Test',
                releaseDate: fc.releaseDate || '2005-05-05',
                uarts: fc.uarts || 3,
                weightInGrams: fc.weightInGrams || 7.5,
                cpu: fc.cpu || 'F7',
                // releaseDateUpdated: fc.releaseDateUpdated || new Date(),
                dimensions: fc.dimensions || '30.5x30.5',
                holePattern: fc.holePattern || '30.5x30.5',
                voltageInputMin: fc.voltageInputMin || 5,
                voltageInputMax: fc.voltageInputMax || 25,
                osd: fc.osd || true,
              }}
              onSubmit={onSubmit}
            >
              {({ values, isSubmitting, handleSubmit, setFieldValue, errors }) => (
                <Fragment>
                  <FormErrors errors={errors} />
                  <form onSubmit={(formSubmitValues, anything) => {
                    console.log('formSubmitValues', formSubmitValues, anything);
                    handleSubmit(formSubmitValues);
                  }}>
                    <fieldset disabled={isSubmitting}>
                      <fieldset className="form-group">
                        <Field
                          name="name"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Flight Controller Name"
                          required
                        />
                      </fieldset>
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
                      <fieldset className="form-group">
                        <Field
                          name="releaseDate"
                          type="date"
                          className="form-control form-control-lg"
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="uarts"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="weightInGrams"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="cpu"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="dimensions"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="holePattern"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="voltageInputMin"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="voltageInputMax"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="osd"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          required
                        />
                      </fieldset>
                      <button type="submit" className="btn btn-lg pull-xs-right btn-primary">
                        Save Flight Controller
                      </button>
                    </fieldset>
                  </form>
                </Fragment>
              )}
            </Formik>
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
