import React, { Component } from 'react';
import Modals from './Modals';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  FormGroup,
  Input }
from 'reactstrap';
import '../stylesheets/Liststyle.css';

class AcornsList extends Component {

state = {
  text: '',
  filterString: ''
}

inputChange= (e) =>{
  this.setState({...this.state, filterString: e.target.value})
  }


  render() {
    const fString = this.state.filterString.toLowerCase()

    const filteredAcorns = this.props.acorns.filter(acorn =>
      acorn.title.toLowerCase().includes(fString) ||
      acorn.category.toLowerCase().includes(fString) ||
      acorn.content.toLowerCase().includes(fString)
    )

    return (
      <Container>
        <Row>
          <Col>
              <FormGroup id="search" size="lg">
                <Input type="search" name="search" id="search" placeholder="Search by category, title or content . . . " onChange={this.inputChange} />
              </FormGroup>
          </Col>
        </Row>
          <Jumbotron>
            <Col className= "text-center">
              <img src='../images/acornIcon.png' id="acorn" className="animated pulse" alt="imglogo" />
            </Col>
              <Col>
                <h3 className="text-center"><em>All the Acorns</em></h3>
                  <hr className="my-2" />
                    <p className="text-center">Click on an Acorn to view and share with a friend!</p>
                    <p className="lead"></p>
              </Col>
          </Jumbotron>
            <Col id="title">
              {filteredAcorns.map((acorn) => {
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
  }
}

export default AcornsList;
