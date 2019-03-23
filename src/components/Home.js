import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "../stylesheets/Homestyle.css";

const Home = (props) => {

  return (
    <Container>
      <Row>
        <Col id="logo" className= "text-center">
          <img
          src= '../images/acornslogo.png'
          className="img-fluid animated rollIn"
          alt="imglogo"
          />
        </Col>
      </Row>
          <Col>
            <h3 className="text-center"><em>Good things to get you through dark times.</em></h3>
              <hr className="my-2" />
                <p className="text-center">A store-house for instant support, wisdom and simple comforts.</p>
                <p className="lead"></p>
                <div>
              <Col className="text-center">
                <Button outline className="orange" href="./Acorns">Surprise Me!</Button>
              </Col>
              <Col className="text-center">
                <Button outline className="orange" href="./AcornsList">See the Stash</Button>
              </Col>
              </div>
          </Col>
    </Container>
  )
}

export default Home;
