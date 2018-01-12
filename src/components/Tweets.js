import React from 'react';
import './tweets.css';
import PropTypes from 'prop-types';
import moment from 'moment'


const Tweets = ({tweets}) => (

    

    <div className="tweets-wrapper">
    <div className="innput-div"></div>

  {  tweets.map(function(tweet){
   
      return (
            <div className="tweet-div">
                    <div className="grid-1-tweet">
                   <a href={`https://www.twitter.com/${tweet.user.screen_name}`}><img src={tweet.user.profile_image_url} alt="user-picture"/></a>
                    </div>
                    <div className="grid-2-tweet">

                        <div className="tweet-details">
                            <div className="tweet-author">
                                <span className="tweetAuthor">{tweet.user.name} </span>
                                <span className="tweetAuthorScreen">@{tweet.user.screen_name} </span>
                                 <ParseTime tweet={tweet}/>
                            </div>
                            <div className="actual-tweet">
                                <p className="p-tweet">{tweet.text}</p>
                            </div>
                        </div>
                        
                        <div className="tweet-picture">
                        <TweetPicture tweet={tweet}/>
                        </div> 

                        <div className="tweet-icons">
                             <div className="ic-div"><i class="fa fa-comment-o" aria-hidden="true"></i><span className="ic comment"></span></div>
                             <div className="ic-div"><i class="fa fa-retweet" aria-hidden="true"></i><TweetRetweet tweet={tweet}/></div>
                             <div className="ic-div"><i class="fa fa-heart-o" aria-hidden="true"></i><TweetLikes tweet={tweet}/></div>
                             <div className="ic-div"><i class="fa fa-envelope-o" aria-hidden="true"></i><span className="ic message"></span></div>
                        </div>

                    </div> 
            </div>
      )
    }) }

    </div>

);


const TweetPicture = ({ tweet }) => {

    if(tweet.entities.media) {
        return <img src={tweet.entities.media[0].media_url} alt="tweetPic"/>
    }
    else {
        return null;
    }

}

const TweetLikes = ({ tweet }) => { 

    if(tweet.favorite_count){

       return <span className="ic heart">{tweet.favorite_count}</span>

        } else {

            return null;
        }

    }


const TweetRetweet = ({tweet}) => {

    if(tweet.retweet_count){

        return <span className="ic retweet">{tweet.retweet_count}</span>
 
         } else {
 
             return null;
         }

 }


const ParseTime = ({tweet}) => {


    const time = moment(tweet.created_at).fromNow();

    return (
        <span className="timeSpan">{time}</span> 
    );


}







export default Tweets;