(function(root){
  var CHANGE_EVENT = "change";
  
  var _rains = {};
  
  var resetRainfalls = function(obj){
    _rains = obj;
    return _rains;
  };
  
  
  
  root.RainfallStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback){
      
    },
    all: function(){
      return _rains;
    },
    dispatcherID: AppDispatcher.register(function(payload){
      
      if(payload.actionType === RainfallConstants.RAINFALLS_RECEIVED){
        resetRainfalls(payload.rainfalls);
        RainfallStore.emitChange();
      }
    }),
    emitChange: function (){
      this.emit(CHANGE_EVENT);
    }
  })
  
})(this)