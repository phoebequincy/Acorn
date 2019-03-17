import React, { Component } from 'react';
import Login from './components/Login';
import Acorns from './components/Acorns';
import './/stylesheets/Loginstyle.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
// https://acorns4darkdays.herokuapp.com

class App extends Component {

  constructor() {
    super();
      this.state = {
      login : false,
      showLogin : false,
      signup : false,
      }
    }

    showLogin = () => {
      this.setState({
        ...this.state,
        showLogin : !this.state.showLogin
      })
    }

    toggleLogin = () => {
      this.setState({
        ...this.state,
        login : !this.state.login
      })
    }

    toggleSignup = () => {
      this.setState({
        ...this.state,
        signup : !this.state.signup
      })
    }

    render() {


    return (
      <div>
        <div>
        <Navigation />
        {this.state.login ? null : <Home />}

        {!this.state.login && this.state.showLogin ? <Home /> : null}

        {!this.state.login && this.state.showLogin ? <Login toggleLogin = {this.toggleLogin}/> : null}

        {this.state.login && !this.state.showLogin ? <Acorns /> : null}

        </div>
      </div>

    );
  }
}

export default App;
