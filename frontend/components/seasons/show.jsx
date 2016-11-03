var React = require('react');

var RainfallShow = require('../rainfalls/show.jsx').RainfallShow;
var CalendarHeatmap = require('./calendar_heatmap.jsx').CalendarHeatmap;


var SeasonShow = React.createClass({
  render: function(){
    var chartValues = this.props.rains.map(function(rainValue){
      return { date: rainValue['year'] + "-" + rainValue['month'] + "-" + rainValue['day']};
    });
    
    return (
      <div>
        <h1>{parseInt(this.props.year) - 1}-{parseInt(this.props.year)}</h1>
        <CalendarHeatmap year={this.props.year} values={chartValues} />
      </div>
    )
  }
});

module.exports = {
  SeasonShow: SeasonShow
}
