import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Home = (props) => {

  return (
    <Container>
      <Row>
        <Col className= "text-center">
        <img src= 'acorns.Logov.4.png' className="img-fluid" alt="imglogo" />
        </Col>
      </Row>
        <Col>
          <h1 className="text-center"><em>Good things to get you through dark times.</em></h1>
          <hr className="my-2" />
          <p className="text-center">Like squirrels storing acorns for the winter, Acorns is a store-house for instant support when you're struggling to get through hard times. Acorns have activities, wisdom, simple comforts and inspiration. Try Acorns, add your own, share with a friend!</p>
          <p className="lead"></p>
        </Col>
        
      </Container>
  );
}

export default Home;
