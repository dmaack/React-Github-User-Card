import React from 'react';
import axios from 'axios';
import CardsContainer from './components/CardContainer'

import './App.css';
// import FollowersCards from './components/FollowersCards';
import FollowersContainer from './components/FollowersContainer';

class App extends React.Component {
  constructor() {
    console.log('CONSTRUCTOR in app.js')
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    //Calling my own user info
    console.log('cDM invoked in app.js... calling setstate')
    console.log(this)
    axios
    .get('https://api.github.com/users/dmaack')
    .then(res => {
      this.setState({
        user: [...this.state.user, res.data]
      })
      console.log(res)
    })
    .catch(err => {
      console.log('data did not render', err)
    })

    //Calling my followers info\
    //using forEach because axios is async and map is expecting me to return a value immediately -- due to async call it wasnt working?
    axios
    .get('https://api.github.com/users/dmaack/followers')
    .then(res => {
      res.data.forEach(follower => {
        axios
          .get(follower.url)
          .then(res => {
            this.setState({
              user: [...this.state.user, res.data]
            })
          })
       
      })
      console.log('followers data', res)
    })
    .catch(err => {
      console.log('data did not render', err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('cDU running')
    //are we re-rerendering? if we did this will run
  }


  render() {
    console.log('RENDER running')
    return (
      <>
      <div className="App">
        <h1>React Github User Cards</h1>
        <CardsContainer user={this.state.user} />
        
      </div>
      <div>
        {/* <FollowersContainer followers={this.state.followers} />  */}
      </div>
      </>
    );
  }
  }


export default App;
