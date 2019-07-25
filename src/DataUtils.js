import _ from 'underscore'

const DataUtils = {

  cleanInputs: (obj) => {
    console.log('obj', obj);
    // TODO: Take what you did on the FC Filters and figure out to extend that as a reusable function
  },

  cleansFlightControllerInput: (fc) => {
    // I must parse out the numeric values b/c they come through as strings and don't validate against the schema
    [
      'voltageInputMin', 'voltageInputMax', 'fiveVoltOutput', 'eightVoltOutput', 'nineVoltOutput',
      'currentSensorRating', 'maxCurrent', 'weightInGrams', 'onBoardFlash', 'uarts'
    ].forEach((key) => {
      fc[key] = parseFloat(fc[key]);
    })

    // I've got to null out values so they don't get sent to the server as empty strings.
    _.keys(fc).forEach((key) => {
      console.log("key", key, fc[key])
      fc[key] = (fc[key]) ? fc[key] : null
    })

    if(fc.releaseDate){
      fc.releaseDate = new Date(fc.releaseDate + " 00:00:00")
    }

    // There are some keys we can't send
    fc.merchantLinks = undefined;
    fc.postedBy = undefined;
    fc.updatedBy = undefined;
    fc['__typename'] = undefined;

    return fc
  }
}

export {DataUtils}

