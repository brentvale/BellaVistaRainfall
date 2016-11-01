var React = require('react');

var MONTH_TO_NUMBER_OF_DAYS = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

var DayStep = React.createClass({
  numberOfDaysInMonth: function(month){
    return MONTH_TO_NUMBER_OF_DAYS[month];
  },
  render: function(){
    var that = this;
    var totalDays = this.numberOfDaysInMonth(this.props.month);
    var daysArray = [];
    for(var i = 1; i < totalDays+1; i++){
      daysArray.push(i);
    }
    var bootstrapClasses = "col-xs-3 col-sm-2 col-md-1";
    
    return(
      <div className="col-xs-12">
        {daysArray.map(function(dayNum, idx){
          return <div key={idx} 
                      className={bootstrapClasses} 
                      onClick={that.props.handleNextStep}
                      id={dayNum}>
                    <div className="box-with-shadow center-block sm-width">{dayNum}</div>
                 </div>
        })}
        
      </div>
    )
  }
});

module.exports = {
  DayStep: DayStep
};