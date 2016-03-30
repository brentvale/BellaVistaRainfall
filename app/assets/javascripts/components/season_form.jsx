var SeasonForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return({startYear: "start year", endYear: "end year"})
  },
  componentDidMount: function(){
    RainfallStore.addChangeListener(this.onChange);
  },
  onChange: function(){
    alert("on change happened in seasonForm");
  },
  addSeason: function(event){
    event.preventDefault();
    // ApiUtil.createSeason({startYear: this.state.startYear, endYear: this.state.endYear});
  },
  render: function(){
    return (
      <div className="season-form">
        <form onSubmit={this.addSeason}>
          <input type="text" valueLink={this.linkState('startYear')}/>
          <input type="text" valueLink={this.linkState('endYear')}/>
          <input type="submit" value="Create Season"/>
        </form>
      </div>
    )
  }
})
