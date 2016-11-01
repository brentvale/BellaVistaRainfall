var React = require('react');

var SeasonShow = require('./show.jsx').SeasonShow;

var SeasonIndex = React.createClass({
  
  render: function(){
    return(
      <div>
        {this.props.allRains.map(function(rainObj, idx){
          return <SeasonShow key={idx} rains={rainObj.rains} year={rainObj.year}/>
        })}
      </div>
      
    )
  }
});

module.exports = {
  SeasonIndex: SeasonIndex
}