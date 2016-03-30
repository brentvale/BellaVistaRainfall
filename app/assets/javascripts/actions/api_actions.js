ApiActions = {
  receiveAll: function(rainfalls){
    AppDispatcher.dispatch({
      actionType: RainfallConstants.RAINFALLS_RECEIVED,
      rainfalls: rainfalls
    });
  }
}