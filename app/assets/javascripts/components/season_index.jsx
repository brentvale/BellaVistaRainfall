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
    if(this.state.rains.length > 1){
      debugger
    }
    return(
      <ul>
      {
        this.state.rains.map(function(rain){
          return <li key={rain.id}>{rain.time_info} => {rain.amount_in_inches}</li>
        })
      }
      </ul>
    )
  }
})