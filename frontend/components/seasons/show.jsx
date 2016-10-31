var React = require('react');

var SeasonShow = React.createClass({
  render: function(){
    return (
      <ul>
        {this.props.rains.map(function(rain, idx){
          return <li key={idx}>{rain['amount_in_inches']}</li>;
        })}
      </ul>
    )
  }
});

module.exports = {
  SeasonShow: SeasonShow
}
