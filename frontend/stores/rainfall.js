var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RainfallConstants = require('../constants/rainfallConstants.js');
var RainfallStore = new Store(AppDispatcher);

var _rains = {};

var resetRainfalls = function(obj){
  _rains = obj;
  return _rains;
};
var addRainfall = function(rainfall){
  debugger
  return _rains[rainfall.year].push(rainfall);
};

RainfallStore.all = function(){
  return _rains;
};

RainfallStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RainfallConstants.RAINFALLS_RECEIVED:
      resetRainfalls(payload.rainfalls);
      RainfallStore.__emitChange();
      break;
    case RainfallConstants.RAINFALL_RECEIVED:
      addRainfall(payload.rainfall);
      RainfallStore.__emitChange();
      break;
  }
}

module.exports = RainfallStore;