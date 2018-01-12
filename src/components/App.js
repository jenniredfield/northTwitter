import React from "react";
import Nav from './nav.js';
import User from './User.js';
import Trends from './Trends.js';
import Tweets from './Tweets.js';
import Post from './postTweet.js';
import './app.css';

class App extends React.Component {

  state = {

    userProfile: {},
    trends: [],
    tweets: [],
  };

  componentDidMount () {
    this.fetchUser('northcoders');
    this.fetchTrends();
    this.fetchTweets();
  }
  
  render() {

    // console.log(this.state.userProfile)
    // console.log(this.state.trends)
    console.log(this.state.tweets)
    return (
 
      <div className="App">
        <Nav/> 
        <div className="grid">
            <div className="grid-1">
                <User user={this.state.userProfile}/>
                <Trends trends={this.state.trends}/>
            </div>
            <div className="grid-2">
                <Post user={this.state.userProfile} fetchTweets={this.fetchTweets}/>
                <Tweets tweets={this.state.tweets}/>
            </div>
            <div className="grid-3">
            </div>
        </div>  
      </div>
 
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
          trends:  res.trends,
        });
      
      })
      .catch(console.log);
  };

  fetchTweets =  () => {
    return fetch(`https://northcoders-sprints-api.now.sh/api/twitter/timeline`)
      .then((resBuffer) => resBuffer.json())
      .then((res) => {
        this.setState({
          tweets:  res.tweets,
        });
      
      })
      .catch(console.log);
  };


}

export default App;
// console.log(userProfile)