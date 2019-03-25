import React, { Component } from 'react';
import '../stylesheets/SMSForm.css';
import {
  FormGroup,
  Button,
  Container,
  Input,
  }
from 'reactstrap';


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
    fetch('/api/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
    .then(res => JSON.parse(res.json()))
    .then(data => {
        if (data.success) {
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
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
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
                  value={this.state.message.to}
                  onChange={this.onHandleChange}
                />
                </p>

                <p>
                <label htmlFor="body">Your Message</label>
                <Input
                  name="body"
                  id="body"
                  defaultValue={this.props.selectedAcorn.content}
                  onChange={this.onHandleChange}
                />
                </p>

              <Button className="orange" type="submit" disabled={this.state.submitting}>
                Send message
              </Button>

      </FormGroup>}
    </Container>
    );
  }
}

export default SMSForm;
