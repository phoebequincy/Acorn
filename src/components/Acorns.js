import React, { Component } from 'react';
import {Container, Col, Row, Button } from 'reactstrap';
import '../stylesheets/Acornstyle.css'


class Acorns extends Component {

state = {
acorns: [],
acornDisplay: {},
selectedAcorn: {}
}

componentDidMount = async() => {
this.randomAcorn()
}

randomAcorn = async () => {
    const response = await fetch('http://localhost:3000/acorns')
    const json = await response.json()
    let data = json.map((acorns,i) => {
      return {
        ...acorns,
      }
    })
    const randomNum = Math.floor(Math.random() * data.length)
    const newState = {...this.state}
    newState.acornDisplay = data[randomNum]
    this.setState({
      acornDisplay: newState.acornDisplay
    })
  }


  render() {
    return (
      <Container className="acornMessage">
        <Row id='staticpic'>
          <Col>
          <img src={this.state.acornDisplay.src} className="img-fluid" alt=""/>
          </Col>
        </Row>

        <Row id="acornMessage">
          <Col className="text-center">
            <p id= "category" className="text-center">{this.state.acornDisplay.category}</p>
            <h2 className="display-3 text-center">{this.state.acornDisplay.title}</h2>
            <p className="lead text-center">{this.state.acornDisplay.content}</p>

            <Button id="refresh" outline color="secondary" href="./Acorns">Again!
            </Button>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Acorns;
