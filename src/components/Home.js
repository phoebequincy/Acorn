import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "../stylesheets/Homestyle.css";

const Home = (props) => {

  return (
    <Container>
      <Row>
        <Col className= "text-center">
        <img src= 'acorns.Logov.4.png' className="img-fluid" alt="imglogo" />
        </Col>
      </Row>
        <Col>
          <h3 className="text-center"><em>Good things to get you through dark times.</em></h3>
            <hr className="my-2" />
              <p className="text-center">A store-house for instant support, wisdom and simple comforts.</p>
              <p className="lead"></p>
              <p>
            <Col className="text-center">
              <Button outline color="secondary" href="./Acorns">Get an Acorn!</Button>
            </Col>
            </p>
        </Col>
          <Col className="text-center">
            <p>
              <Button outline color="success" href="./Login">Login</Button>
            </p>

            <p>
              <Button outline color="info" href="./Signup">Sign Up</Button>
            </p>
          </Col>
    </Container>
  );
}

export default Home;
