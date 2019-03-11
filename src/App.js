import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// https://acorns4darkdays.herokuapp.com
class App extends Component {


  state = {
    acorns: [],
    acornDisplay: {},
  }

 componentDidMount = async() => {
this.randomAcorn()
  }

  randomAcorn = async () => {
    const response = await fetch('http://localhost:3000/acorns')
    const json = await response.json()
    let data = json.map((acorns,i) => {
      return {
        ...acorns,
      }
    })
    const randomNum = Math.floor(Math.random() * data.length)
    const newState = {...this.state}
    newState.acornDisplay = data[randomNum]
    this.setState({
      acornDisplay: newState.acornDisplay
    })
  }

//   addNewAcorn = async (acorns) => {
//       const response = await fetch('https://acorns4darkdays.herokuapp.com/acorns', {
//         method: 'POST',
//         body: JSON.stringify(acorns),
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//       })
//       const json = await response.json()
//       this.setState({
//         ...this.state,
//         acorns: [...this.state.acorns, json]
//   })
// }
//
//     deleteAcorn = async (acornId) => {
//     const response = await fetch(`https://acorns4darkdays.herokuapp.com/acorns'/${acornId}`, {
//           method: 'DELETE',
//           headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//       })
//       const json = await response.json()
//       let index = this.state.acorns.findIndex( acorn => {
//         return acorn.id === json.id
//       })
//       this.setState({
//         ...this.state,
//         acorns: [...this.state.acorns.slice(0,index), ...this.state.acorns.slice(index + 1)]
//       })
//     }
//
//     editAcorn = async (obj) => {
//       const response =  await fetch(`https://acorns4darkdays.herokuapp.com/acorns'/${obj.id}`, {
//           method: 'PATCH',
//           body: JSON.stringify(obj),
//           headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//
//     const editedAcorn = await response.json()
//     let editIndex = this.state.acorns.findIndex(message => acorn.id === editedAcorn.id)
//     this.setState({
//       ...this.state,
//         acorns: [...this.state.acorns.slice(0, editIndex), editedMessage, ...this.state.acorns.slice(editIndex + 1)]
//     })
//
//   }
//
//     handleSearch = (e) => {
//     let newState = {...this.state}
//     newState.filterString = e.target.value.toLowerCase()
//     this.setState({filterString : newState.filterString})
//     }

    render() {
    return (
      <div className="App" >
      <div className="container-fluid">
      {this.state.acornDisplay.title}
      <br/>
      {this.state.acornDisplay.category}
      <br/>
      {this.state.acornDisplay.content}
      </div>
      </div>
        //
        //   <Header
        //     handleSearch={this.handleSearch}
        //     composeShowHide={this.composeShowHide}
        //     filterString={this.state.filterString}
        //     messages={this.state.messages}
        //               />
        //
        //   <MessageList
        //     renderMessages={this.renderMessages}
        //     messages={this.state.messages}
        //     deleteMessage={this.deleteMessage}
        //     editMessage={this.editMessage}
        //     filterString={this.state.filterString}
        //   />
        //
        // <div className="container">
        //   <div className="col-md-6">
        //     {this.state.composeOn &&
        //
        //   <Compose
        //     addNewMessage={this.addNewMessage}
        //     composeShowHide={this.composeShowHide}
        //   />}
        // </div>
        // </div>
        // </div>

    );
  }
}

export default App;
