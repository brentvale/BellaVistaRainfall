(function(root){
  var CHANGE_EVENT = "change";
  var _seasons = [];
  
  root.RainfallStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback){
      
    },
  })
  
})(this)