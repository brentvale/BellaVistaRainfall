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
        <h1>{this.props.year}-{parseInt(this.props.year) + 1}</h1>
        <CalendarHeatmap values={chartValues} />
      </div>
    )
  }
});

module.exports = {
  SeasonShow: SeasonShow
}
