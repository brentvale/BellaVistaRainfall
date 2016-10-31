var React = require('react');
var RainfallStore = require('../../stores/rainfall.js');
var ClientActions = require('../../actions/clientActions.js');

var SeasonShow = require('./show.jsx').SeasonShow;

var SeasonIndex = React.createClass({
  getInitialState: function(){
    return(
      {rains: RainfallStore.all()}
    )
  },
  componentDidMount: function(){
    this.seasonListener = RainfallStore.addListener(this._onChange);
    ClientActions.fetchAllRainData();
  },
  _onChange: function(){
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