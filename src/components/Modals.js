import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
import '../stylesheets/Modalstyle.css'

const API = process.env.REACT_APP_API

class Modals extends React.Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    return (

      <Container id="modals" fluid>
          <React.Fragment>

            <Button className="orange" onClick={this.toggle}>
              {this.props.acorn.title}
            </Button>
            <Modal id="allmodals"
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                {this.props.acorn.title}
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md='4'>
                    <img src={`${API}${this.props.acorn.src}`}
                      style={ styles.imageSize }
                      alt=""
                    />
                  </Col>
                  <Col md='8'>
                    {this.props.acorn.content}
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="orange"
                  onClick={this.toggle}
                >
                  Share
                </Button>
                {' '}
              </ModalFooter>
            </Modal>
          </React.Fragment>
      </Container>
    );
  }
}

const styles = {
  imageSize: {
    height: "9em",
    width: "9em"
  }
}

export default Modals;
