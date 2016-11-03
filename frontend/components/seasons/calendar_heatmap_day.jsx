var React = require('react');

var RainfallStore = require('../../stores/rainfall.js');

var CalendarHeatmapDay = React.createClass({
  render: function(){
    var inchesOnDay = RainfallStore.returnDaysRainFromDate(this.props.year + "-" 
                                                         + this.props.month + "-" + this.props.date);
                                                         
    var colorOfTile;
    if(inchesOnDay){
      switch(true){
      case inchesOnDay < 1:
        colorOfTile = this.props.colors[0];
        break;
      case inchesOnDay < 2:
        colorOfTile = this.props.colors[1];
        break;
      case inchesOnDay < 3:
        colorOfTile = this.props.colors[2];
        break;
      case inchesOnDay < 4:
        colorOfTile = this.props.colors[3];
        break;
      case inchesOnDay >= 4:
        colorOfTile = this.props.colors[4];
        break;
      }
    }

    return(
      <div className="calendar-day filled" style={{backgroundColor: colorOfTile}}></div>
    )
  }
});

module.exports = {
  CalendarHeatmapDay: CalendarHeatmapDay
}