import React, { Component } from 'react';
import {
  Container,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  } from 'reactstrap';


class AcornsList extends Component {

  state = {
  acorns: [],
  acornDisplay: {},
  }
  componentDidMount = async() => {
  this.getAcorn()
  }

  getAcorn = async () => {
    const response = await fetch('http://localhost:3000/acorns/1')
    const json = await response.json()

    this.setState({
      acornDisplay: json
    })
    }

  render() {
    console.log(this.state.acornDisplay)
        return (
          <Container>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h2>Acorns Library</h2>
                <Card>
                  <CardImg top width="100%" src="../images/goforaride.jpg" alt="" />
                  <CardBody>
                  <CardTitle>{this.state.acornDisplay.title}</CardTitle>
                  <CardSubtitle>{this.state.acornDisplay.category}</CardSubtitle>
                  <CardText>{this.state.acornDisplay.content}</CardText>
                    <Button>Share</Button>
                  </CardBody>
                </Card>
              </Col>
          </Container>
        )
    };
  }

export default AcornsList;
