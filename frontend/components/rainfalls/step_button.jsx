var React = require('react');

var StepButton = React.createClass({
  render: function(){
    var klass = "box-with-shadow";
    if(this.props.selectedIds.includes(this.props.id)){
      klass += " selected";
    }
    return(
      <div id={this.props.id}
           onClick={this.props.whenClick}
           className={klass}>
           {this.props.text}
      </div>
    )
  }
});

module.exports = {
  StepButton: StepButton
}