import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink as NavbarLink,
} from 'reactstrap';
import '../stylesheets/Navstyle.css';

class NavBar extends Component {
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
        <Navbar className="navbar navbar-dark bg-dark">
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand id="logo" className="navbar"></NavbarBrand>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>

                <NavItem>
                  <NavbarLink href="/">Home</NavbarLink>
                </NavItem>

                <NavItem>
                  <NavbarLink href="/Acorns/">Acorns</NavbarLink>
                </NavItem>

                <NavItem>
                  <NavbarLink href="/AcornsList/">The Stash</NavbarLink>
                </NavItem>

              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default NavBar;
