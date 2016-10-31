var Dispatcher = require('../dispatcher/dispatcher.js');
var RainfallConstants = require('../constants/rainfallConstants.js');

module.exports = {
  receiveAllRainData: function(rainfalls){
    Dispatcher.dispatch({
      actionType: RainfallConstants.RAINFALLS_RECEIVED,
      rainfalls: rainfalls
    });
  }
}