import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Acorns from './components/Acorns';
import AcornsList from './components/AcornsList';
import Share from './components/Share';

const API = process.env.REACT_APP_API

class App extends Component {

  state = {
    acorns:[]
  }

  async componentDidMount() {
    const response = await fetch(`${API}/acorns`)
    const json = await response.json()

    this.setState({...this.state, acorns: json})
  }



    render() {

      return (
        <div>
          <div>
            <NavBar />
              <Route path="/" exact component={Home} />

              <Route path="/acorns"
                component={() =>
                  <Acorns
                  acorns={this.state.acorns}
                  />}
              />

              <Route path="/AcornsList"
                component={()=>
                  <AcornsList
                    acorns={this.state.acorns}
                    handleSearch={this.handleSearch}
                  />}
              />

              <Route path="/Share" component={Share} />
          </div>
        </div>
    )
  }
}

export default App;
