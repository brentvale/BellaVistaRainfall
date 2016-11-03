var React = require('react');

var MONTH_NUMBER_TO_WORD = require('../../../constants/conversion.js').monthNumToName;

var InfoReviewStep = React.createClass({
  numberToMonthName: function(){
    return MONTH_NUMBER_TO_WORD[this.props.month]
  },
  render: function(){
    var monthDisplay = this.numberToMonthName();
    return(
      <div>
        <h4>{monthDisplay} {this.props.day}, {this.props.year}</h4>
        {this.props.hours.map(function(hour, idx){
          return <span className="hour-display" key={idx}>{hour}</span>
        })}<br/>
        <span className="hour-display">Inches:</span> <span>{this.props.inches}</span>
        <div className="col-xs-12">
          <h3>Is Everything Correct?</h3>
          <div className="col-xs-6">
            <div className="box-with-shadow center-block wide-width" id="no" onClick={this.props.handleNextStep}>
              No
            </div>
          </div>
          <div className="col-xs-6">
            <div className="box-with-shadow center-block wide-width" id="yes" onClick={this.props.handleNextStep}>
              Yes
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  InfoReviewStep: InfoReviewStep
}