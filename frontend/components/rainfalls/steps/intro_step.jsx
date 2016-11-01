var React = require('react');

var IntroStep = React.createClass({
  render: function(){
    var bootstrapInnerClasses = "box-with-shadow center-block wide-width";
    
    return(
      <div className="col-xs-12">
        <h3>Did the Rain Happen Today?</h3>
        <div className={this.props.bootstrapClassesSelectItem}>
          <div  className={bootstrapInnerClasses}
                id="no"
                onClick={this.props.handleNextStep}>No</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem}>
          <div  className={bootstrapInnerClasses}
                id="yes"
                onClick={this.props.handleNextStep}>Yes</div>
        </div>
      </div>
    )
  }
});

module.exports = {
  IntroStep: IntroStep
};