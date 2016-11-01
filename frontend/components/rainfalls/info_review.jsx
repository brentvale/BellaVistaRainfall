var React = require('react');

var RainfallInfoReview = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.info['month']} {this.props.info['day']}, {this.props.info['year']}<br></br>
        {this.props.info['inches']}
      </div>
    )
  }
});

module.exports = {
  RainfallInfoReview: RainfallInfoReview
}