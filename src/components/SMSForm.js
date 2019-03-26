import React, { Component } from 'react';
import '../stylesheets/SMSForm.css';
import {
  FormGroup,
  Button,
  Container,
  Input,
  }
from 'reactstrap';
const API = process.env.REACT_APP_API


class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });

    const body = {
      to: this.state.message.to,
      body: `http://google.com ${this.state.message.body}`
    }

    fetch(`${API}/sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      if (res.ok) {
        this.setState({
          error: false,
          submitting: false,
          message: {
            to: '',
            body: ''
          }
        });
      } else {
        this.setState({
          error: true,
          submitting: false
        });
      }
    });
  }

  onHandleChange(event) {
    const inputField = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [inputField]: event.target.value }
    });
  }

  render() {

    return (
      <Container> {this.props.selectedAcorn &&
        <FormGroup
          onSubmit={this.onSubmit}
          className={this.state.error ? 'error sms-form' : 'sms-form'}
        >
            <div>
            <h1>Send an Acorn</h1>
            </div>
              <p>
              <label htmlFor="to">Send To</label>
              <Input

                type="tel"
                name="to"
                id="to"
                placeholder="Your number here . . ."
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
              </p>

              <p>
              <label htmlFor="body">Your Message</label>
              <Input
                name="body"
                id="body"
                placeholder="Add a personal message . . ."
                onChange={this.onHandleChange}
                value={this.state.message.body}
              />
              </p>

              <Button className="orange" type="submit" onClick={ this.onSubmit }  disabled={this.state.submitting}>
                Send message
              </Button>
       </FormGroup>}
    </Container>
    );
  }
}

export default SMSForm;
