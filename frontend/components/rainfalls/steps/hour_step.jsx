var React = require('react');

var HourStep = React.createClass({
  getInitialState: function(){
    return {selectedHours: []}
  },
  updateHours: function(e){
    var newHour = e.target.id || e.target.parentElement.id;
    var newSelectedHoursArray;
    if(this.state.selectedHours.includes(newHour)){
      //remove hour
      newSelectedHoursArray = [];
      for(var i = 0; i < this.state.selectedHours.length; i++){
        if(this.state.selectedHours[i] !== newHour){
          newSelectedHoursArray.push(this.state.selectedHours[i]);
        }
      }
    } else {
      //add hour
      newSelectedHoursArray = this.state.selectedHours;
      newSelectedHoursArray.push(newHour);
    }
    this.setState({selectedHours: newSelectedHoursArray});
  },
  readyForNextStep: function(e){
    var klass = e.target.className;
    e.target.className = klass + " selected";
    this.props.handleNextStep(this.state.selectedHours);
  },
  render: function(){
    var that = this;
    var innerClasses = "box-with-shadow center-block med-width";
    var innerClassesSelected = "box-with-shadow center-block med-width selected";
    
    var bootstrapClasses = "col-xs-4 col-sm-3 col-md-2 col-lg-1"
    var times = [1,2,3,4,5,6,7,8,9,10,11,12];
    return(
      <div className="col-xs-12">
        <div className="col-xs-12">
          <h3>Select Time(s)</h3>
          {times.map(function(time, idx){
            return  <div key={idx} className={bootstrapClasses} onClick={that.updateHours} id={time + "-am"}>
                      <div className={(that.state.selectedHours.includes(time+"-am")) ? innerClassesSelected : innerClasses}>{time}:00 AM</div>
                    </div>
          })}
          {times.map(function(time, idx){
            return  <div key={idx} className={bootstrapClasses} onClick={that.updateHours} id={time + "-pm"}>
                      <div className={(that.state.selectedHours.includes(time+"-pm")) ? innerClassesSelected : innerClasses}>{time}:00 PM</div>
                    </div>
          })}
        </div>
        <div className="col-xs-12">
          <div className="box-with-shadow center-block wide-width" onClick={this.readyForNextStep}>
            NEXT
          </div>
        </div>
      </div>
      
    )
  }
});

module.exports = {
  HourStep: HourStep
};