import React, { Component } from 'react';
import Acorns from './Acorns'

class AcornsList extends Component {

    render() {
      const filterAcorns = this.props.acorns.filter(acorn =>  acorn.acorn.toLowerCase().includes(this.props.filterString) ||
        acorn.name.toLowerCase().includes(this.props.filterString)
      )

        return (
            <ul className="list-group">
                <div>
                {filterAcorns.map((acorn) => {
                  return (
                    <Acorns
                      key={this.state.acornDisplay.id}
                      id={acorn.id}
                      title={acorn.title}
                      content={acorn.content}
                    />
                  )
                  })}
                </div>
            </ul>
        )
    }
}

export default AcornsList;
