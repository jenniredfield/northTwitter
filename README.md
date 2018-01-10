# Northwitter

## Objectives

1. Learn how to integrate HTTP requests and fetched data into your React UI.
2. Learn about advanced React functionality such as Component lifcycle methods.
3. Put your functional programming into use as you will need to manipulate the data served up. Our API serves up the data exactly the same as Twitter does.
4. Practice your CSS skills by cloning the Twitter's homepage styling which will be an awesome show piece for your portfolio!


## Requirements

1. Implement either the Home view of Twitter or a specific user's profile page by following the [React Checklist](https://github.com/northcoders/FE-northwitter/blob/master/CHECKLIST.md). We recommend doing the whole process with a single component (Trends would be a good one to start) to get the hang of it.
2. Use [Bootstrap](http://getbootstrap.com/) for styling (you may add your own custom styles too). It might be a good idea to do some styling early to position all the components in the page, but most of the styling should be done after the logic is implemented.
3. The application should fetch data from the provided API.
4. The app should have 3 main data-driven components:
  1. User Profile
  2. Trends list
  3. Tweets timeline

## Advanced Requirements
- For each tweet render any attached data such as images. Handles (@username) and hashtags (#Hashtag) should be displayed as links and should link to the actual pages on real Twitter. You may use the logic you implemented on the Twitter Data kata from a while ago 😄
- The form submitting tweets should validate tweets' length and show any characters after 280 in red (copy functionality from Twitter).
- Make your app send a tweet by posting it to the API POST endpoint (it will post under the very real user [@nc_students_say](https://twitter.com/nc_students_say)).
- Make your app respond properly to a failed POST request, for example by showing a notification message (Bootstrap has those)
- Play with Bootsrap and try to get as close to the real styling as possible.
- Implement the "Load more" functionality (copy the behaviour from Twitter)
- See if you can implement some sort of routing to render the profile page of a user or the main timeline. This is a great task to test how reusable your components are.


## API documentation

Domain: `https://northcoders-sprints-api.now.sh/api/twitter`

### Status
`GET /`
Responds with the status of the API.

### Users
`GET /users`
Responds with an array of the available user names.

### User Profile
`GET /users/:username`
Responds with the profile for the specified user

### Trends
`GET /trends`
Responds with an array of 50 trends.

### Tweets
`GET /timeline`
Responds with the most recent 50 tweets from all available users, in reverse chronological order

This endpoint accepts a `page` query string parameter to get more tweets. It defaults to `0`

### Individual handle's tweets
`GET /tweets/:username`
Responds with the latest 50 tweets for the specified user name.

### Post a tweet
`POST /tweets`
Expects a body with a `status` property. `status` should be a string not larger than 280 characters. 

Posts the passed tweet to Twitter under the user @nc_students_say and saves the tweet in the database.

Responds with `201 Created` and the posted tweet.

If send an invalid body, it responds with `400 Bad Request`

## Resources

[Bootstrap Documentation](http://getbootstrap.com/css/)

[Difference between GET and POST requests](https://www.youtube.com/watch?v=UObINRj2EGY)

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[React Component Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html)

[Collection of Frontend Resources on Wakelet](http://wke.lt/w/s/lH3kv)
