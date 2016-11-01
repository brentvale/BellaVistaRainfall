var React = require('react');

var YearStep = React.createClass({
  render: function(){
    var innerClasses = "box-with-shadow center-block med-width";
    
    return(
      <div className="col-xs-12">
        <h3>Select Year</h3>
      
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2017">
          <div className={innerClasses}>2017</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2016">
          <div className={innerClasses}>2016</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2015">
          <div className={innerClasses}>2015</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2014">
          <div className={innerClasses}>2014</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2013">
          <div className={innerClasses}>2013</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2012">
          <div className={innerClasses}>2012</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2011">
          <div className={innerClasses}>2011</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2010">
          <div className={innerClasses}>2010</div>
        </div>
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2009">
          <div className={innerClasses}>2009</div>
        </div>
      
      </div>
    )
  }
});

module.exports = {
  YearStep: YearStep
};