import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/dmaack')
    .then(res => {
      this.setState({
        cards: res.data.followers
      })
      console.log(res)
    })
    .catch(err => {
      console.log('data did not render', err)
    })
  }


  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
  }


export default App;
