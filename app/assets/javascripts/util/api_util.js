ApiUtil = {
  fetchAllRains: function(){
    $.ajax({
      type: "GET",
      url: "/api/rains",
      success: function(resp){
        ApiActions.receiveAll(resp);
      }, 
      error: function(resp){
        console.log("errored out in the ajax request");
        
      }
    });
  },
}