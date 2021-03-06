var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx').App;
var SeasonIndex = require('./components/seasons/index.jsx').SeasonIndex;
var SeasonShow = require('./components/seasons/show.jsx').SeasonShow;
var RainfallForm = require('./components/rainfalls/form.jsx').RainfallForm;

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SeasonIndex}/>
      <Route path="/new_rain_entry" component={RainfallForm}/>
    </Route>
    
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});