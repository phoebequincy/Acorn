import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';










class App extends Component {
async componentDidMount(){
  const response = await fetch('http://localhost:3000/acorns')
          const json = await response.json()
          let data = json.map((acorns,i) => {
            return {
              ...acorns,
                // class: classArray[i],
                // img: imgArray[i],
                // overlay: spanClass[i]
            }
          })
          console.log(data)
          this.setState({ acorns:data })
      }
}


    render() {
    return (
      <div className="App">
        // https://acorns4darkdays.herokuapp.com
      </div>
    );
  }
}

export default App;
