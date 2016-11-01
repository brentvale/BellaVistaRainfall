var ServerActions = require('../actions/serverActions.js');

module.exports = {
  fetchAllRainData: function(){
    $.ajax({
      type: "GET",
      url: "/api/rainfalls",
      success: function(resp){
        ServerActions.receiveAllRainData(resp.rainfalls);
      }, 
      error: function(resp){
        console.log("errored out in the ajax request"); 
      }
    });
  },
  createRain: function(formData){
    $.ajax({
      type: "POST",
      url: "/api/rainfalls",
      data: {
        rainfall: {
          month: formData.month,
          day: formData.day,
          year: formData.year,
          hours: formData.hours,
          amount_in_inches: formData.inches
        }
      },
      success: function(resp){
        ServerActions.receiveCreatedRainfall(resp.rainfall);
      }, 
      error: function(resp){
        console.log("errored out in the ajax request"); 
      }
    });
  }
}