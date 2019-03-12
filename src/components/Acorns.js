import React, { Component } from 'react';
import {Container, Col, Row } from 'reactstrap';


  class Acorns extends Component {

    state = {
    acorns: [],
    acornDisplay: {},
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

      <Container>
        <Row>
          <Col xs="4">{this.state.acornDisplay.title} </Col>
          <Col xs="4"> Category: {this.state.acornDisplay.category} </Col>
        </Row>
          <Row>
            <Col>{this.state.acornDisplay.content}</Col>
          </Row>
      </Container>









    );
  }
}

export default Acorns;
