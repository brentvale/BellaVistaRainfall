var React = require('react');

var CalendarHeatmapDay = require('./calendar_heatmap_day.jsx').CalendarHeatmapDay;
var MONTH_NUM_TO_NUMBER_OF_DAYS = require('../../constants/conversion.js').monthNumToNumOfDays;

var CalendarHeatmapMonth = React.createClass({
  render: function(){
    var that = this;
    var firstDateOfMonth = new Date(this.props.year + "-" + this.props.monthNumber + "-" + "1");
    var firstDay = firstDateOfMonth.getDay();
    
    var spaceFillerDays = [];
    for(var i = 0; i < firstDay; i ++){
      spaceFillerDays.push(i);
    }
    var firstWeekDays = [];
    for(var i = 0; i < (7-firstDay); i ++){
      firstWeekDays.push(i);
    }
  
    var firstWeek = <div className="calendar-week center-block">
                      {spaceFillerDays.map(function(fillerDay, idx){
                        return <div className="calendar-day" key={idx}></div>;
                      })}
                      {firstWeekDays.map(function(dayNum, jdx){
                        return <CalendarHeatmapDay  key={jdx} 
                                                    date={dayNum}
                                                    month={that.props.monthNumber}
                                                    year={that.props.year}
                                                    colors={that.props.colors}/>;
                      })}
                      </div>;
                      
    var restOfMonthDays = [];
    var count = 1;
    var week = [];
    for(var i = (7-firstDay); i < MONTH_NUM_TO_NUMBER_OF_DAYS[this.props.monthNumber]; i++){
      week.push(i);
      if(count % 7 == 0){
        restOfMonthDays.push(week);
        week = []
      }
      count += 1;
    }
    restOfMonthDays.push(week);
    
    return(
      <div className="center-block" style={{textAlign:"center"}}>
        <div className="calendar-week center-block">
          <div className="calendar-day-head">S</div>
          <div className="calendar-day-head">M</div>
          <div className="calendar-day-head">T</div>
          <div className="calendar-day-head">W</div>
          <div className="calendar-day-head">Th</div>
          <div className="calendar-day-head">F</div>
          <div className="calendar-day-head">S</div>
        </div>
        {firstWeek}
        
        {restOfMonthDays.map(function(week, idx){
          return  <div key={idx} className="calendar-week center-block">
                    {week.map(function(dayNum, jdx){
                      return <CalendarHeatmapDay  key={jdx}
                                                  date={dayNum}
                                                  month={that.props.monthNumber}
                                                  year={that.props.year}
                                                  colors={that.props.colors}/>
                    })}
                  </div>
        })}
        
      </div>
    )
  }
});

module.exports = {
  CalendarHeatmapMonth: CalendarHeatmapMonth
}