var React = require('react');

var InchesStep = React.createClass({
  getInitialState: function(){
    return {inches: "", tenths: ""}
  },
  handleButtonPress: function(e){
    var selectedId = e.target.id || e.target.parentElement.id;
    
    if(selectedId.slice(0,2) === "pt"){
      //id corresponds to tenths value
      if(this.state.inches !== ""){
        var stringTotalInches = this.state.inches + "." + selectedId.slice(2);
        var klass = e.target.className;
        e.target.className = klass + " selected";
        this.props.handleNextStep(stringTotalInches);
      }else {
        this.setState({tenths: selectedId.slice(0,2)});
      }
    } else {
      //id corresponds to inches value
      if(this.state.tenths !== ""){
        var stringTotalInches = selectedId + "." + this.state.tenths;
        var klass = e.target.className;
        e.target.className = klass + " selected";
        this.props.handleNextStep(stringTotalInches);
      }else {
        this.setState({inches: selectedId});
      }
    }
  },
  render: function(){
    var that = this;
    
    var innerClasses = "box-with-shadow center-block sm-width";
    var innerClassesSelected = "box-with-shadow center-block sm-width selected";
    
    var bootstrapClasses = "col-xs-3 col-sm-2 col-md-1";
    
    var inches = ["0","1","2","3","4"];
    var tenths = [  ["0","pt0"], ["1","pt1"], ["2","pt2"], ["3","pt3"], ["4","pt4"], 
                    ["5","pt5"], ["6","pt6"], ["7","pt7"], ["8","pt8"], ["9","pt9"]
                  ];
    return(
      <div>
        <div className="col-xs-12">
          <h3>Select Inches</h3>
          {inches.map(function(num, idx){
            return  <div key={idx} className={bootstrapClasses} onClick={that.handleButtonPress} id={num.toString()}>
                      <div className={(that.state.inches === num) ? innerClassesSelected : innerClasses}>
                        {num}
                      </div>
                    </div>
          })}
        </div>
      
        <div className="col-xs-12">
          <h3>Select Tenths of Inches</h3>
          {tenths.map(function(num, idx){
            return  <div key={idx} className={bootstrapClasses} onClick={that.handleButtonPress} id={num[1]}>
                      <div className={(that.state.inches === num) ? innerClassesSelected : innerClasses}>
                        0.{num[0]}
                      </div>
                    </div>
          })}
        </div>

      </div>
    )
  }
});

module.exports = {
  InchesStep: InchesStep
};