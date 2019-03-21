import React, { Component } from 'react';
import Modals from './Modals';
import {Container,Row, Col } from 'reactstrap';



class AcornsList extends Component {

  state = {

  }

  render() {

        return (
          <Container>
            <Row>
              <Col>
              <h2>Acorns Library</h2>
            {this.props.acorns && this.props.acorns.map((acorn) => {
              return (
                <Modals
                  key={acorn.id}
                  acorn={acorn}
                />
              )
            }) }
              </Col>
            </Row>
          </Container>
        )
    };
  }

export default AcornsList;
