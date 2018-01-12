import React from 'react';
import './postTweet.css';
import PropTypes from 'prop-types';

class Post extends React.Component {

    state = {
        userInput: "",
    }


    post = (event) => {

            event.preventDefault();

           const data = { status: this.state.userInput}

            fetch("https://northcoders-sprints-api.now.sh/api/twitter/tweets", {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), 
                headers: new Headers({
                'Content-Type': 'application/json'
                })
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                
                console.log('Success:', response)
                return this.props.fetchTweets();
            }).then(() => {
                this.setState({
                    userInput: "",
                })
            }

            );

    }


    handleChange = (event) => {
        
        this.setState({
            userInput : event.target.value, 
        });
    }

    render () {

    return (

            <div className="postTweet-div">
                   <div className="grid-1-input">
                       <img src={this.props.user.profile_image_url} alt="banner" className="user-logo-input"/>
                   </div>
                   <div className="grid-2-input">

                       <input id="postInput" placeholder="What's happening?" onChange={this.handleChange} value={this.state.userInput}></input>
                       <button className="tweet-button" onClick={this.post}>Tweet</button>

                   </div>
            </div>
  
              
        );
    }

}



export default Post;