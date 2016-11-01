var React = require('react');
var RainfallStore = require('../stores/rainfall.js');
var ClientActions = require('../actions/clientActions.js');

var SeasonIndex = require('./seasons/index.jsx').SeasonIndex;
var CustomNav = require('./navigation/custom_nav.jsx').CustomNav;

var App = React.createClass({
  getInitialState: function(){
    return(
      {rains: RainfallStore.all()}
    )
  },
  componentDidMount: function(){
    this.seasonListener = RainfallStore.addListener(this._onChange);
    ClientActions.fetchAllRainData();
  },
  componentWillUnmount: function(){
    this.seasonListener.remove();
  },
  _onChange: function(){
    this.setState({rains: RainfallStore.all()});
  },
  render: function(){
    
    var allRains = [];
    for(var year in this.state.rains){
      allRains.push({year: year, rains: this.state.rains[year]})
    }
    
    var seasons = ["2016-2017", "2015-2016", "2014-2015", "2013-2014", "2012-2013", "2011-2012", "2010-2011", "2009-2010"];
    
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
         return React.cloneElement(child, {
           allRains: allRains
         })
        }.bind(this));
    
    return(
      <div id="container">
        <CustomNav seasons={seasons}/>
      
        {childrenWithProps}
      </div>
    )
  }
});

module.exports = {
  App: App
}