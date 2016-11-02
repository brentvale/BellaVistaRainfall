var React = require('react');

var CalendarHeatmapMonth = React.createClass({
  render: function(){
    return(
      <div style={{textAlign:"center"}}>
        <div className="calendar-week">
          <div className="calendar-day-head">S</div>
          <div className="calendar-day-head">M</div>
          <div className="calendar-day-head">T</div>
          <div className="calendar-day-head">W</div>
          <div className="calendar-day-head">Th</div>
          <div className="calendar-day-head">F</div>
          <div className="calendar-day-head">S</div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
        <div className="calendar-week">
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
          <div className="calendar-day"></div>
        </div>
      </div>
    )
  }
});

module.exports = {
  CalendarHeatmapMonth: CalendarHeatmapMonth
}