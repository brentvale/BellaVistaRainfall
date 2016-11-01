var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchAllRainData: function(){
    ApiUtil.fetchAllRainData();
  },
  createRain: function(formData){
    ApiUtil.createRain(formData);
  }
}