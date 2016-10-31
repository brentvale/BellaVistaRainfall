var React = require('react');

var SeasonIndex = require('./seasons/index.jsx').SeasonIndex;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Bella Vista Rainfall</h1>
        <SeasonIndex />
      </div>
    )
  }
});

module.exports = {
  App: App
}