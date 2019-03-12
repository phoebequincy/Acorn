import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Acorns from './components/Acorns';
import './App.css';


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

        {this.state.login ? <Acorns/> : <Toolbar
          toggleLogin = {this.toggleLogin}/>}



        </div>
      </div>

    );
  }
}

export default App;
