var React = require('react');

var RainfallStep = require('./step.jsx').RainfallStep;
var StepData = require('../../constants/stepData.js');
var ClientActions = require('../../actions/clientActions.js');

var RainfallForm = React.createClass({
  getInitialState: function(){
    return {
      currentStep: 1,
      month: "",
      day: "",
      year: "",
      inches: ""
    }
  },
  handleFormNavigation: function(id){
    switch(this.state.currentStep){
      //today or enter date
    case 1:
      if(id === "yes"){
        var date = new Date();
        var month =  date.getMonth() + 1;
        var day = date.getDay() + 1;
        var year = date.getYear();
        this.setState({ currentStep: 5, month: month, day: day, year: year});
      }else if(id === "no"){
        this.setState({currentStep: 2});
      }
      break;
    case 2:
      this.setState({month: id, currentStep: 3});
      break;
    case 3:
      this.setState({day: id, currentStep: 4});
      break;
    case 4:
      this.setState({year: id, currentStep: 5});
      break;
    case 5:
      this.setState({inches: id, currentStep: 6});
      break;
    case 6:
      if(id === "yes"){
        ClientActions.createRain({
          month: this.state.month,
          day: this.state.day,
          year: this.state.year,
          inches: this.state.inches
        });
      }else if(id === "no"){
        this.setState({
          currentStep: 1,
          month: "",
          day: "",
          year: "",
          inches: ""
        })
      }
      break;
    }
  },
  render: function(){
    var currentStepInfo = StepData[this.state.currentStep];
    //when on final step of proces, pass info to display
    //if adding more steps to the form (hours of storm) need to change review state
    var reviewState = (this.state.currentStep === 6) ?  true : false;
    var rainfallStep;
    if(reviewState){
      var infoObj = { month: this.state.month,
                      day: this.state.day,
                      year: this.state.year,
                      inches: this.state.inches };
      rainfallStep = <RainfallStep  handleFormNavigation={this.handleFormNavigation} 
                                    stepInfo={currentStepInfo}
                                    rainfallInfo={infoObj}
                                    requiredFieldCount={currentStepInfo.length}/>;
    } else {
      rainfallStep = <RainfallStep  handleFormNavigation={this.handleFormNavigation} 
                                    stepInfo={currentStepInfo}
                                    requiredFieldCount={currentStepInfo.length}/>;
    }
    return(
      <div>
        <h3>Rainfall Form</h3>
        {rainfallStep}
      </div>
    )
  }
});

module.exports = {
  RainfallForm: RainfallForm
}