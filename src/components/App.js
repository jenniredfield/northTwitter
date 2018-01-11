import React from "react";
import Nav from './nav.js';
import User from './User.js';
import Trends from './Trends.js';
import './app.css';

class App extends React.Component {

  state = {

    userProfile: {},
    trends: [],
  };

  componentDidMount () {
    this.fetchUser('northcoders');
    this.fetchTrends();
  }
  
  render() {

    console.log(this.state.userProfile)
    console.log(this.state.trends)
    return (
      // <body style={{backgroundColor: "lightblue"}}>
      <div className="App">
        <Nav/> 
        <div className="grid">
            <div className="grid-1">
                <User user={this.state.userProfile}/>
                <Trends trends={this.state.trends}/>
            </div>
            <div className="grid-2">
            </div>
            <div className="grid-3">
            </div>
        </div>  
      </div>
      // </body>
      );
  }

  fetchUser =  (query) => {
    return fetch(`https://northcoders-sprints-api.now.sh/api/twitter/users/${query}`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        this.setState({
          userProfile:  res.user,
        });
      
      })
      .catch(console.log);
  };

  fetchTrends =  () => {
    return fetch(`https://northcoders-sprints-api.now.sh/api/twitter/trends`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        this.setState({
          trends:  res.trends.slice(0,10),
        });
      
      })
      .catch(console.log);
  };



}

export default App;
// console.log(userProfile)