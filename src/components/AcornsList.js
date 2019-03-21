import React, { Component } from 'react';
import Modals from './Modals';


class AcornsList extends Component {

  state = {

  }

  render() {
    
        return (
          <div>
            {this.props.acorns ? this.props.acorns.map((acorn) => {
              return (
                <Modals
                  key={acorn.id}
                  acorn={acorn}
                />
              )
            }) : null}
          </div>
        )
    };
  }

export default AcornsList;
