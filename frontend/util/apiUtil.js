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
}