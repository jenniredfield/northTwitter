import React from 'react';
import './trends.css';
import PropTypes from 'prop-types';

const Trends = ({trends}) => (

        <div className="trends-box">
        <h2>Trends for you</h2><span className="changeSpan">Change</span>

   { trends.map(function(trend){
        if(trend.tweet_volume !== null){
           
            return (          
                <div className="user-trending">
                <p className="user-trending-name">{trend.name}</p>
                <p className="numberTweets">{trend.tweet_volume}</p>
            </div>
    
        )

        }
    }) }

     </div>
);


export default Trends;