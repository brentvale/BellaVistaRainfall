var React = require('react');
var ClientActions = require('../../actions/clientActions.js');
var HashHistory = require('react-router').hashHistory;

var IntroStep = require('./steps/intro_step.jsx').IntroStep;
var MonthStep = require('./steps/month_step.jsx').MonthStep;
var DayStep = require('./steps/day_step.jsx').DayStep;
var YearStep = require('./steps/year_step.jsx').YearStep;
var HourStep = require('./steps/hour_step.jsx').HourStep;
var InchesStep = require('./steps/inches_step.jsx').InchesStep;
var InfoReviewStep = require('./steps/info_review_step.jsx').InfoReviewStep;


var RainfallForm = React.createClass({
  getInitialState: function(){
    return {
      currentStep: 1,
      month: "",
      day: "",
      year: "",
      inches: "",
      hours: []
    }
  },
  componentFromCurrentStep: function(){
    var boostrapSizeClasses = "col-xs-6 col-sm-3 col-md-2";
    
    switch(this.state.currentStep){
    case 1:
      return <IntroStep handleNextStep={this.handleNextStep}
                        bootstrapClassesSelectItem={boostrapSizeClasses}/>;
    case 2:
      return <MonthStep handleNextStep={this.handleNextStep}
                        bootstrapClassesSelectItem={boostrapSizeClasses}/>;
    case 3:
      return <DayStep handleNextStep={this.handleNextStep}
                      bootstrapClassesSelectItem={boostrapSizeClasses}
                      month={this.state.month}/>;
    case 4:
      return <YearStep  handleNextStep={this.handleNextStep}
                        bootstrapClassesSelectItem={boostrapSizeClasses}/>;
    case 5:
      return <HourStep  handleNextStep={this.handleNextStep}/>;
    case 6:
      return <InchesStep  handleNextStep={this.handleNextStep}
                          bootstrapClassesSelectItem={boostrapSizeClasses}/>;
    case 7:
      return <InfoReviewStep  handleNextStep={this.handleNextStep}
                              bootstrapClassesSelectItem={boostrapSizeClasses}
                              month={this.state.month}
                              day={this.state.day}
                              year={this.state.year}
                              inches={this.state.inches}
                              hours={this.state.hours}/>;
    }
  },
  handleNextStep: function(e){
    var that = this;
    var selectionTimeBeforeNavigate = 150;
    
    //make selected elemented appear selected briefly
    if(e.target){
      var className = e.target.className;
      e.target.className = className + " selected";
    }
    
    switch(this.state.currentStep){
    case 1:
      if(e.target.id === "yes"){
        var date = new Date();
        setTimeout(function(){
          that.setState({ currentStep: 5,
                          month: date.getMonth() + 1,
                          day: date.getDate(),
                          year: date.getYear() + 1900});
        }, selectionTimeBeforeNavigate);
        
      }else{
        setTimeout(function(){
          that.setState({ currentStep: 2});
        }, selectionTimeBeforeNavigate);
      }
      break;
    case 2:
      var month = e.target.id || e.target.parentElement.id;
      setTimeout(function(){
        that.setState({ currentStep: 3, month: parseInt(month)});
      }, selectionTimeBeforeNavigate);
      break;
    case 3:
      var day = e.target.id || e.target.parentElement.id;
      setTimeout(function(){
        that.setState({ currentStep: 4, day: parseInt(day)});
      }, selectionTimeBeforeNavigate);
      break;
    case 4:
      var year = e.target.id || e.target.parentElement.id;
      setTimeout(function(){
        that.setState({ currentStep: 5, year: parseInt(year)});
      }, selectionTimeBeforeNavigate);
      break;
    case 5:
      setTimeout(function(){
        that.setState({ currentStep: 6, hours: e });
      }, selectionTimeBeforeNavigate);
      break;
    case 6:
      var floatInches = parseFloat(e);
      setTimeout(function(){
        that.setState({ currentStep: 7, inches: floatInches});
      }, selectionTimeBeforeNavigate);
      break;
    case 7:
      if(e.target.id === "yes"){
        setTimeout(function(){
          ClientActions.createRain(
            {
              month: that.state.month,
              day: that.state.day,
              year: that.state.year,
              inches: that.state.inches,
              hours: that.state.hours
            },
            that.navigateToIndex
          );
        }, selectionTimeBeforeNavigate);
      } else if(e.target.id === "no"){
        setTimeout(function(){
          that.setState({ currentStep: 1,
                          month: "",
                          day: "",
                          year: "",
                          inches: "",
                          hours: []});
        }, selectionTimeBeforeNavigate);
      }
      
      break;
    }
  },
  navigateToIndex: function(){
    console.log("navigateToIndex function in form.jsx");
    HashHistory.push("/");
  },
  render: function(){
    var currentStepComponent = this.componentFromCurrentStep();
    return (
      <div>
        {currentStepComponent}
      </div>
    )
  }
});

module.exports = {
  RainfallForm: RainfallForm
}