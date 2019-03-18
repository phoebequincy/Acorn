import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink as NavbarLink,
} from 'reactstrap';
import Navstyle from '../stylesheets/Navstyle.css';

const linkInfo = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/Acorns',
        text: 'Acorns'
    },
    {
        path: '/Login',
        text: 'Login'
    },
    {
        path: '/Signup',
        text: 'Sign Up'
    },
    {
        path: '/MyAcorns',
        text: 'My Acorns'
    },
    {
        path: '/Share',
        text: 'Share'
    }
]
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
                  <NavbarLink href="/Login/">Login</NavbarLink>
                </NavItem>

                <NavItem>
                  <NavbarLink href="/Signup/">Sign Up</NavbarLink>
                </NavItem>

                <NavItem>
                  <NavbarLink href="/MyAcorns/">My Acorns</NavbarLink>
                </NavItem>

                <NavItem>
                  <NavbarLink href="/Share/">Share</NavbarLink>
                </NavItem>

              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
