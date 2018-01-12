import React from 'react';
import './postTweet.css';
import PropTypes from 'prop-types';

const PostTweet = ({user}) => (

     <div className="postTweet-div">
            <div className="grid-1-input">
                <img src={user.profile_image_url} alt="banner" className="user-logo-input"/>
            </div>
            <div className="grid-2-input">
                <input id="postInput" placeholder="What's happening?"></input>
                <button className="tweet-button">Tweet</button>
            </div>
     
     
     
     </div>
);


export default PostTweet;