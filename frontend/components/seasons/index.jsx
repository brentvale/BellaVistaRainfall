var React = require('react');

var SeasonShow = require('./show.jsx').SeasonShow;

var SeasonIndex = React.createClass({
  
  render: function(){
    return(
      <div>
        {this.props.years.map(function(year, idx){
          return <SeasonShow key={idx} year={year}/>
        })}
      </div>
      
    )
  }
});

module.exports = {
  SeasonIndex: SeasonIndex
}