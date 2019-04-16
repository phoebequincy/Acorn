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
import '../stylesheets/Modalstyle.css';
import {Link} from 'react-browser-router';


const API = process.env.REACT_APP_API

const styles = {
  imageSize: {
    height: "9em",
    width: "9em"
  }
}

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
      <Container className="text-center" id="modals" fluid>
          <React.Fragment>
            <Button className="orange" onClick={this.toggle}>
              {this.props.acorn.title}
            </Button>

            <Modal id="allmodals"
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader id="mheader" toggle={this.toggle}>
                {this.props.acorn.title}
              </ModalHeader>
              <ModalBody id="mbody">
                <Row>
                  <Col md='4'>
                    <img src={`${API}${this.props.acorn.src}`}
                      style={ styles.imageSize }
                      alt=""
                    />
                  </Col>
                  <Col md='8'>
                    <p>{this.props.acorn.content}</p>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>

                <Link to="/SMSForm">
                <Button
                  className="orange"
                  onClick={this.props.messageStore}
                  id={this.props.acorn.id}
                >
                  Share
                </Button>
                {' '}
                </Link>

                <Button
                  className="orange"
                  onClick={this.toggle}
                >
                  Cancel
                </Button>

              </ModalFooter>
            </Modal>
          </React.Fragment>
      </Container>
    );
  }
}

export default Modals;
