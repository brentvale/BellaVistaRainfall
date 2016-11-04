var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RainfallConstants = require('../constants/rainfallConstants.js');
var RainfallStore = new Store(AppDispatcher);

var _rains = {},
    _rainDayLookup = {};

var createRaindayLookup = function(hash){
  var raindayHash = {};
  
  for(var year in hash){
    for(var i = 0; i < hash[year].length; i++){
      if(hash[year][i].month < 7){
        raindayHash[(parseInt(year)+1) + "-" + hash[year][i].month + "-" + hash[year][i].day] = hash[year][i];
      } else {
        raindayHash[year + "-" + hash[year][i].month + "-" + hash[year][i].day] = hash[year][i];
      }
    }
  }
  return raindayHash;
};

var resetRainfalls = function(obj){
  _rains = obj;
  _rainDayLookup = createRaindayLookup(obj);
};

var addRainfall = function(rainfall){
  if(parseInt(rainfall.month) < 7){
    _rains[rainfall.year-1].push(rainfall);
  } else {
    _rains[rainfall.year].push(rainfall);
  }
  return _rains;
};

RainfallStore.all = function(){
  return _rains;
};

RainfallStore.returnMonthsFromYear = function(year){
  var monthsHash = {7:{}, 8:{}, 9:{}, 10:{}, 11:{}, 12:{}, 1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}};
  var allRainsInYear = _rains[year];
  if(allRainsInYear){
    for(var i = 0; i < allRainsInYear.length; i++){
      monthsHash[allRainsInYear[i].month][allRainsInYear[i].day] = allRainsInYear[i];
    }
  }
  
  return monthsHash;
};
RainfallStore.returnDaysRainFromDate = function(date){
  //format of date should be '2009-1-1'
  return _rainDayLookup[date] || false;
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