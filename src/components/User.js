import React from 'react';
import './user.css';
import PropTypes from 'prop-types';

const User = ({user}) => (
    
    <div className="userProfile">
                 <div className="userProfile-Banner">
                        <img src={user.profile_banner_url} alt="banner"/>
                </div>
                <div className="userProfile-Details">
                         <img src={user.profile_image_url} alt="banner" className="user-logo"/>
                         <div className="userName">
                            <p >{user.name}</p>
                            <p className="screenName">@{user.screen_name}</p>
                         </div>
                        <div className="userProfile-tweet-count">
                            <ul id="user-ul">
                                <li>Tweets<span className="user-counts">{user.statuses_count}</span></li>
                                <li>Following <span className="user-counts">{user.friends_count}</span></li>
                                <li>Followers<span className="user-counts">{user.followers_count}</span></li>
                            </ul>
                        </div>
                </div>
        </div>
    
);


export default User;