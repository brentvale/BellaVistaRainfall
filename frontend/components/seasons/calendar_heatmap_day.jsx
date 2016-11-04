var React = require('react');

var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Tooltip = require('react-bootstrap').Tooltip;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;

var RainfallStore = require('../../stores/rainfall.js');

var CalendarHeatmapDay = React.createClass({
  render: function(){
    var rainData = RainfallStore.returnDaysRainFromDate(this.props.year + "-" 
                                                         + this.props.month + "-" + this.props.date);                                 
    var colorOfTile;
    if(rainData){
      switch(true){
      case rainData.amount_in_inches < 1:
        colorOfTile = this.props.colors[0];
        break;
      case rainData.amount_in_inches < 2:
        colorOfTile = this.props.colors[1];
        break;
      case rainData.amount_in_inches < 3:
        colorOfTile = this.props.colors[2];
        break;
      case rainData.amount_in_inches < 4:
        colorOfTile = this.props.colors[3];
        break;
      case rainData.amount_in_inches >= 4:
        colorOfTile = this.props.colors[4];
        break;
      }
    }

    var tooltip;
    if(rainData){
      tooltip = <Tooltip id="tooltip">{this.props.year + "-" + this.props.month + "-" + this.props.date + " : " + rainData.amount_in_inches + " inches"}</Tooltip>;
    } else {
      tooltip = <Tooltip id="tooltip">{this.props.year + "-" + this.props.month + "-" + this.props.date + " : " + "no rain"}</Tooltip>;
    }
    return(
      <OverlayTrigger placement="top" overlay={tooltip}>
        <div className="calendar-day filled" style={{backgroundColor: colorOfTile}}></div>
      </OverlayTrigger>
    )
  }
});

module.exports = {
  CalendarHeatmapDay: CalendarHeatmapDay
}