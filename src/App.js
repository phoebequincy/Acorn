import React, { Component } from 'react';
import Login from './components/Login';
import Acorns from './components/Acorns';
import './/stylesheets/Login.css';
import Navigation from './components/Navigation';


class App extends Component {

  constructor() {
    super();
      this.state = {
      login : false,
      }
    }

    toggleLogin = () => {
      this.setState({
        ...this.state,
        login : !this.state.login
      })
    }



// https://acorns4darkdays.herokuapp.com




    render() {
    return (
      <div>
        <div>
        <Navigation />
        {this.state.login ? <Acorns/> : <Login
          toggleLogin = {this.toggleLogin}/>}



        </div>
      </div>

    );
  }
}

export default App;
