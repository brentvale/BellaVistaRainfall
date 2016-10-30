var SeasonIndex = React.createClass({
  getInitialState: function(){
    return(
      {rains: RainfallStore.all()}
    )
  },
  componentDidMount: function(){
    RainfallStore.addChangeListener(this.onChange);
    ApiUtil.fetchAllRains();
  },
  onChange: function(){
    this.setState({rains: RainfallStore.all()});
  },
  render: function(){
    return(
      
    )
  }
})