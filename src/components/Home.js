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
              <p className="text-center">A store-house for instant support, wisdom and simple comforts.</p>
              <p className="lead"></p>
              <p>
            <Col className="text-center">
              <button type="button" href="./components/Acorns" className="btn btn-outline-secondary" onSubmit={ (e) =>{
                this.submit(e)
                this.props.toggleLogin()
              }}>Get an Acorn!</button>
            </Col>
            </p>
        </Col>
        <Col className="text-center">
          <p>
          <button type="button" href="./Login" className="btn btn-outline-success" onClick={ (e) =>{
            this.submit(e)
            this.props.showLogin()
          }}>Login</button>
          </p>
          <p>
         <button type="button lg" href="./Account" className="btn btn-outline-info" onClick={ (e) =>{
           this.submit(e)
           this.props.toggleSignup()
         }}>Sign Up</button>
         </p>
        </Col>
      </Container>
  );
}

export default Home;
