import React from 'react';
import './postTweet.css';
import PropTypes from 'prop-types';

class Post extends React.Component {

    state = {
        userInput: "",
        expanded: false,
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

    inputClick = () => {

        this.setState({
            expanded: true,
        })

    }

    inputNotExpanded = () => {
        this.setState({
            expanded: false,
        })
    }

    render () {

    return (

            <div className="postTweet-div">
                   <div className="grid-1-input">
                       <img src={this.props.user.profile_image_url} alt="banner" className="user-logo-input"/>
                   </div>
                   <div className="grid-2-input">

                       <textarea placeholder="What's happening?" onClick={this.inputClick} onChange={this.handleChange} value={this.state.userInput} className={this.state.expanded ? "expanded" : "notExpanded"} onBlur={this.inputNotExpanded}/>
                       <button className="tweet-button" onClick={this.post}>Tweet</button>

                   </div>
            </div>
  
              
        );
    }

}



export default Post;