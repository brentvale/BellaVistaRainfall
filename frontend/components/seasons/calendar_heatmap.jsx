var React = require('react');
var RainfallStore = require('../../stores/rainfall.js');

var MONTH_NUMBER_TO_WORD = require('../../constants/conversion.js').monthNumToName;

var CalendarHeatmapMonth = require('./calendar_heatmap_month.jsx').CalendarHeatmapMonth;

var CalendarHeatmap = React.createClass({
  getInitialState: function(){
    return(
      {rainData: RainfallStore.returnMonthsFromYear(this.props.year)}
    )
  },
  componentDidMount: function(){
    this.rainfallListener = RainfallStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.rainfallListener.remove();
  },
  _onChange: function(){
    this.setState({rainData: RainfallStore.returnMonthsFromYear(this.props.year)});
  },
  render: function(){
    if(!this.state.rainData){
      return <div></div>;
    }
    
    var that = this;
    var months = [[7,8,9], [10,11,12], [1,2,3], [4,5,6]];
    var colors = ["#e2e2ff", "#b9b9ff", "#8181f2", "#4d4dce","#0d0d7a"];
  
    return(
      <div className="col-xs-12">
        {months.map(function(monthBlock, idx){
          return  <div key={idx} className="col-xs-12 col-sm-6 col-lg-3 calendar-row" style={{padding: "0px"}}>
                    <div className="col-xs-4" style={{padding: "0px", textAlign:"center"}}>
                      <h6 style={{margin: "0px"}}>{MONTH_NUMBER_TO_WORD[monthBlock[0]]}</h6>
                      <CalendarHeatmapMonth year={(monthBlock[0] < 7 ) ? that.props.year + 1: that.props.year}
                                            monthNumber={monthBlock[0]}
                                            colors={colors}
                                            rain={that.state.rainData[monthBlock[0]]}/>
                    </div>
                    <div className="col-xs-4" style={{padding: "0px", textAlign:"center"}}>
                      <h6 style={{margin: "0px"}}>{MONTH_NUMBER_TO_WORD[monthBlock[1]]}</h6>
                      <CalendarHeatmapMonth year={(monthBlock[1] < 7 ) ? that.props.year + 1: that.props.year}
                                            monthNumber={monthBlock[1]}
                                            colors={colors}
                                            rain={that.state.rainData[monthBlock[1]]}/>
                    </div>
                    <div className="col-xs-4" style={{padding: "0px", textAlign:"center"}}>
                      <h6 style={{margin: "0px"}}>{MONTH_NUMBER_TO_WORD[monthBlock[2]]}</h6>
                      <CalendarHeatmapMonth year={(monthBlock[2] < 7 ) ? that.props.year + 1: that.props.year} 
                                            monthNumber={monthBlock[2]}
                                            colors={colors}
                                            rain={that.state.rainData[monthBlock[2]]}/>
                    </div>
                  </div>;
        })}
      </div>
    )
  }
});

module.exports = {
  CalendarHeatmap: CalendarHeatmap
}