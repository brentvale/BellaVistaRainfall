var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {
  receiveAll: function(rainfalls){
    Dispatcher.dispatch({
      actionType: RainfallConstants.RAINFALLS_RECEIVED,
      rainfalls: rainfalls
    });
  }
}