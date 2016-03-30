var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <header><h1>Bella Vista Rainfall</h1></header>
        <RouteHandler/>
        
        <SeasonIndex/>
      </div>
    );
  }
});
var routes = (
  <Route name="app" path="/" handler={App}>
    
  </Route>
);

$(function() {
  ReactRouter.run(routes, function (Handler) {
    var root = document.getElementById('root');
    ReactDOM.render(<Handler/>, root);
  });
})
