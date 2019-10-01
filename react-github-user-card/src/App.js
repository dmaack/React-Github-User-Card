import React from 'react';
import axios from 'axios';
// import Cards from './Cards'

import './App.css';

class App extends React.Component {
  constructor() {
    console.log('CONSTRUCTOR in app.js')
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    console.log('cDM invoked in app.js... calling setstate')
    console.log(this)
    axios
    .get('https://api.github.com/users/dmaack')
    .then(res => {
      this.setState({
        user: res.data
      })
      console.log(res)
    })
    .catch(err => {
      console.log('data did not render', err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('cDU running')
  }


  render() {
    console.log('RENDER running')
    return (
      <div className="App">
        <h1>React Github User Cards</h1>
        
      </div>
    );
  }
  }


export default App;
