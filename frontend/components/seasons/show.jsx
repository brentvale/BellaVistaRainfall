var React = require('react');

var SeasonShow = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.year}-{parseInt(this.props.year) + 1}</h1>
        <ul>
          {this.props.rains.map(function(rain, idx){
            return <li key={idx}>{rain['amount_in_inches']}</li>;
          })}
        </ul>
      </div>
    )
  }
});

module.exports = {
  SeasonShow: SeasonShow
}
