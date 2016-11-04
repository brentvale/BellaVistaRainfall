var React = require('react');
var Link = require('react-router').Link;
var RainfallStore = require('../../stores/rainfall.js');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var CustomNav = React.createClass({
  render: function(){
  
    return(
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Bella Vista Ranch</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="seasons" id="basic-nav-dropdown">
                {this.props.years.map(function(year, idx){
                  return <MenuItem key={idx}>
                  {year}-{year+1}
                         </MenuItem>
                })}
            </NavDropdown>
          </Nav>
          <Nav pullRight>
                <NavItem href="#/new_rain_entry">New Rain Entry</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

module.exports = {
  CustomNav: CustomNav
}