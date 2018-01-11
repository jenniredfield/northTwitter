import React from 'react';
import './trends.css';
import PropTypes from 'prop-types';

const Trends = ({trends}) => (

    trends.forEach(function(trend){

          <div className="trends-box">
            <h2>Trends for you</h2><span className="changeSpan">Change</span>
            <div className="user-trending">
                <p>{trend.name}</p>
                <p className="numberTweets">{trend.tweet_volume}</p>
            </div>
        </div>
    
        

    })

);


export default Trends;