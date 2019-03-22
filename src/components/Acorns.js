import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
  Button }
from 'reactstrap';
import '../stylesheets/Acornstyle.css'

const API = process.env.REACT_APP_API

class Acorns extends Component {

state = {
acorns: [],
acornDisplay: {},
}

componentDidMount = async() => {
this.randomAcorn()
}

randomAcorn = async () => {
    const response = await fetch(`${API}/acorns`)
    const json = await response.json()

    const randomNum = Math.floor(Math.random() * json.length)
    const newState = {...this.state}
    newState.acornDisplay = json[randomNum]
    this.setState({
      acornDisplay: newState.acornDisplay
    })
  }

  render() {

    return (
      <Container className="acornImage">
        <Row id='staticpic'>
          <Col>
          <img src={`${API}${this.state.acornDisplay.src}`} className="img-fluid" alt=""/>
          </Col>
        </Row>
        <Row id="acornMessage">
          <Col className="text-center">
            <p id= "category" className="text-center">{this.state.acornDisplay.category}</p>
            <h2 className="display-3 text-center">{this.state.acornDisplay.title}</h2>
            <p className="lead text-center">{this.state.acornDisplay.content}</p>
            <Button id="refresh" className="orange" href="./Acorns">Again!
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Acorns;
