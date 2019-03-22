import React, { Component } from 'react';
import Modals from './Modals';
import { Jumbotron, Container,Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import '../stylesheets/Liststyle.css';




class AcornsList extends Component {


  render() {

    return (
      <Container>
        <Row>
          <InputGroup id="search" size="lg">
            <InputGroupAddon addonType="prepend" onChange={this.props.handleSearch}>Search</InputGroupAddon>
            <Input />
          </InputGroup>
        </Row>

        <Jumbotron>
          <Col className= "text-center">
            <img src='../acornIcon.png' className="img-fluid" alt="imglogo" />
          </Col>
          <Col>
            <h3 className="text-center"><em>All the Acorns</em></h3>
              <hr className="my-2" />
                <p className="text-center">Click on an Acorn to view and share with a friend!</p>
                <p className="lead"></p>
          </Col>
        </Jumbotron>


          <Col id="title">
            {this.props.acorns && this.props.acorns.map((acorn) => {
              return (
                <Modals
                  key={acorn.id}
                  acorn={acorn}
                />
              )
            }) }
          </Col>
      </Container>
    )
  };
}

export default AcornsList;
