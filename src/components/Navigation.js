import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Navstyle from '../stylesheets/Navstyle.css'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="navbar"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Acorns</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Share</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
