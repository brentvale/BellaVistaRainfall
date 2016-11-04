var React = require('react');

var RainfallShow = require('../rainfalls/show.jsx').RainfallShow;
var CalendarHeatmap = require('./calendar_heatmap.jsx').CalendarHeatmap;


var SeasonShow = React.createClass({
  render: function(){
    
    return (
      <div>
        <h1>{parseInt(this.props.year)}-{parseInt(this.props.year) + 1}</h1>
        <CalendarHeatmap year={parseInt(this.props.year)}/>
      </div>
    )
  }
});

module.exports = {
  SeasonShow: SeasonShow
}
