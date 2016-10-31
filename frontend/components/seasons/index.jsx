var SeasonShow = require('./show.jsx').SeasonShow;
var RainfallStore = require('../../stores/rainfall.js');

var SeasonIndex = React.createClass({
  getInitialState: function(){
    return(
      {rains: RainfallStore.all()}
    )
  },
  componentDidMount: function(){
    RainfallStore.addChangeListener(this.onChange);
    ApiUtil.fetchAllRains();
  },
  onChange: function(){
    this.setState({rains: RainfallStore.all()});
  },
  render: function(){
    
    var allRains = [];
    for(var year in this.state.rains){
      allRains.push({year: year, rains: this.state.rains[year]})
    }
    
    return(
      <div>
        {allRains.map(function(rainObj, idx){
          return <SeasonShow key={idx} rains={rainObj.rains} year={rainObj.year}/>
        })}
      </div>
      
    )
  }
});

module.exports = {
  SeasonIndex: SeasonIndex
}