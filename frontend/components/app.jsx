var React = require('react');
var ClientActions = require('../actions/clientActions.js');
var RainfallStore = require('../stores/rainfall.js');

var SeasonIndex = require('./seasons/index.jsx').SeasonIndex;
var CustomNav = require('./navigation/custom_nav.jsx').CustomNav;

var App = React.createClass({
  getInitialState: function(){
    return {rainsFetched: false};
  },
  componentDidMount: function(){
    this.rainsFetchedListener = RainfallStore.addListener(this._onChange);
    ClientActions.fetchAllRainData();
  },
  componentWillUnmount: function(){
    this.rainsFetchedListener.remove();
  },
  _onChange: function(){
    this.setState({rainsFetched: true});
  },
  render: function(){
    if(!this.state.rainsFetched){
      return <div></div>;
    }
    var years = [2009,2010,2011,2012,2013,2014,2015,2016];
    
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
         return React.cloneElement(child, {
           years: years
         })
        }.bind(this));

    return(
      <div id="container">
        <CustomNav years={years}/>
      
        {childrenWithProps}
      </div>
    )
  }
});

module.exports = {
  App: App
}