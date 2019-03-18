import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Acorns from './components/Acorns';
import Login from './components/Login';
import Signup from './components/Signup';
import MyAcorns from './components/MyAcorns';
import Share from './components/Share';

// https://acorns4darkdays.herokuapp.com

class App extends Component {


    render() {


    return (
      <div>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/acorns" component={Acorns} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/photos" component={MyAcorns} />
          <Route path="/share" component={Share} />

        </div>
      </div>

    );
  }
}

export default App;
