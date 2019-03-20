import React, { Component } from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';


class AcornsList extends Component {

    render() {


        return (

              <ListGroup>
                <ListGroupItem>Acorn Title Goes Here</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>

        )
    }
}

export default AcornsList;
