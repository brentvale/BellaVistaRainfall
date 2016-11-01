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
        
      },
      success: function(resp){
        ServerActions.receiveCreatedRainfall(resp.rainfalls);
      }, 
      error: function(resp){
        console.log("errored out in the ajax request"); 
      }
    });
  }
}