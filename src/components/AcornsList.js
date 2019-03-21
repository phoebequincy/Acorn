import React, { Component } from 'react';

import {
  Container,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  } from 'reactstrap';


class AcornsList extends Component {

  state = {
  acorns: [],
  acornDisplay: {},
  filterString: ''
  }
  componentDidMount = async() => {
  this.getAcorn()
  }

  getAcorn = async () => {
    const response = await fetch('http://localhost:3000/acorns/1')
    const json = await response.json()

    this.setState({
      acornDisplay: json
    })
  }

  render() {

    const filterAcorns = this.state.acorns.filter(acorn =>  acorn.acorn.toLowerCase().includes(this.state.filterString) ||
        acorn.name.toLowerCase().includes(this.state.filterString)
      )

        return (
            <ul className="list-group">
                <div>
                {filterAcorns.map((acorn) => {
                  return (
                    <AcornsList
                      key={this.state.acorns.id}
                      id={this.state.acorns.id}
                      title={this.state.acorns.title}
                      category={this.state.acorns.category}
                      content={this.state.acorns.content}
                    />
                  )
              })}
                </div>
            </ul>

        )
    };
  }

export default AcornsList;
