var React = require('react');

var CalendarHeatmapMonth = require('./calendar_heatmap_month.jsx').CalendarHeatmapMonth;

var CalendarHeatmap = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12">
        <div className="col-xs-12 col-sm-6 col-lg-3 calendar-row" style={{padding: "0px"}}>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 calendar-row" style={{padding: "0px"}}>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 calendar-row" style={{padding: "0px"}}>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 calendar-row" style={{padding: "0px"}}>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
          <div className="col-xs-4" style={{padding: "0px"}}>
            <CalendarHeatmapMonth />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  CalendarHeatmap: CalendarHeatmap
}