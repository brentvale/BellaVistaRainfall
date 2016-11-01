var React = require('react');
var RainfallInfoReview = require('./info_review.jsx').RainfallInfoReview;
var StepButton = require('./step_button.jsx').StepButton;

var RainfallStep = React.createClass({
  getInitialState: function(){
    return {field: "", requiredFieldCount: 0, selectedIds: []};
  },
  addToStateAndSubmit: function(e){
    var newField;
    if(this.state.field === ""){
      newField = this.state.field + e.target.id;
    } else if(this.state.field.length > 0){
      newField = this.state.field + "." + e.target.id.slice(-1);
    }
    
    var newFieldCount = this.state.requiredFieldCount + 1;
    var idsArray = this.state.selectedIds;
    idsArray.push(e.target.id);
    
    this.setState({field: newField, requiredFieldCount: newFieldCount, selectedIds: idsArray});
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({field: "", requiredFieldCount: 0, selectedIds: []});
  },
  nextStep: function(){
    this.props.handleFormNavigation(this.state.field);
  },
  render: function(){
    var that = this;
    
    var rainfallInfoToReview;
    if(this.props.rainfallInfo){
      rainfallInfoToReview = <RainfallInfoReview info={this.props.rainfallInfo} />;
    } else {
      rainfallInfoToReview = <div style={{display: "none"}}></div>;
    }
    
    var nextButton;
    if(this.props.requiredFieldCount === this.state.requiredFieldCount){
      nextButton = <div className="form-button button-ready" onClick={this.nextStep}>Next</div>;
    } else {
      nextButton = <div className="form-button button-not-ready">Next</div>;
    }

    console.log(this.state.selectedIds);
    return(
      <div>
        {this.props.stepInfo.map(function(stepInfo, idx){
          return  <div key={idx}>
                    {stepInfo['title']}
                    {stepInfo['options'].map(function(option, jdx){
                      
                      return <StepButton key={jdx} 
                                  id={option['id']} 
                                  whenClick={that.addToStateAndSubmit}
                                  selectedIds={that.state.selectedIds}
                                  text={option['text']} />;
                    })}
                  </div>
        })}
        
        { rainfallInfoToReview }
        
        { nextButton }
        
      </div>
    )
  }
});

module.exports = {
  RainfallStep: RainfallStep
}