var React = require('react');

var MonthStep = React.createClass({
  render: function(){
    var bootstrapInnerClasses = "box-with-shadow center-block wide-width";
    
    return(
      <div className="col-xs-12">
        <h3>Select Month</h3>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="1">
          <div className={bootstrapInnerClasses}>January</div>
        </div>
          
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="2">
          <div className={bootstrapInnerClasses}>February</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="3">
          <div className={bootstrapInnerClasses}>March</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="4">
          <div className={bootstrapInnerClasses}>April</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="5">
          <div className={bootstrapInnerClasses}>May</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="6">
          <div className={bootstrapInnerClasses}>June</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="7">
          <div className={bootstrapInnerClasses}>July</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="8">
          <div className={bootstrapInnerClasses}>August</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="9">
          <div className={bootstrapInnerClasses}>September</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="10">
          <div className={bootstrapInnerClasses}>October</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="11">
          <div className={bootstrapInnerClasses}>November</div>
        </div>
        
        <div className={this.props.bootstrapClassesSelectItem} onClick={this.props.handleNextStep} id="12">
          <div className={bootstrapInnerClasses}>December</div>
        </div>
      
      </div>
    )
  }
});

module.exports = {
  MonthStep: MonthStep
};