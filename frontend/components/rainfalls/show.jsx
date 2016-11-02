var React = require('react');

var RainfallShow = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.rainfall['amount_in_inches']}
      </div>
    )
  }
});

module.exports = {
  RainfallShow: RainfallShow
}