import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Acorns from './components/Acorns';
import AcornsList from './components/AcornsList';
import Share from './components/Share';

class App extends Component {

  state = {

    acorns:{},
    filterString: '',
    composeOn: false
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/acorns')
    const json = await response.json()

    this.setState({...this.state, acorns: json} )
  }


  composeShowHide = () => {
    this.setState({ composeOn: !this.state.composeOn })
  }

  addNewAcorn = async (acorn) => {
        const response = await fetch('http://localhost:3000/acorns', {
          method: 'POST',
          body: JSON.stringify(acorn),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        const json = await response.json()
        this.setState({
          ...this.state,
          acorns: [...this.state.acorns, json]
    })
  }


      handleSearch = (e) => {
      let newState = {...this.state}
      newState.filterString = e.target.value.toLowerCase()
      this.setState({filterString : newState.filterString})
      }

    render() {

    return (
      <div>
        <div>
          <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/acorns" component={Acorns} />
            <Route path="/AcornsList" component={AcornsList} />
            <Route path="/Share" component={Share} />
        </div>
      </div>

    );
  }
}

export default App;
