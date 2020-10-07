/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const sampleTweetObject = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


// use dot notation instead of bracket notation for code readability

const createTweetElement = function(tweetObject) {

  const $tweet = `<article class="tweet-article">
  <header class="tweet-header">
    <img class="tweet-avatar" src="${tweetObject.user.avatars}">
      <h3 class>${tweetObject.user.name}</h3>
      <h3 class="tweet-handle">${tweetObject.user.handle}</h3>
</header>
    <h3>${tweetObject.content.text}</h3>
    <footer>
      <span class="tweet-date">${tweetObject.created_at}</span>
      <span class="tweet-icons">
        <div><i class="far fa-flag"></i></div>
        <div><i class="fas fa-retweet"></i></div>
        <div><i class="far fa-heart"></i></div>
      </span>
    </footer>
</article>`;

  return $tweet;
};

console.log(createTweetElement(sampleTweetObject));












// // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//       "user": {
//       "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac"
//   },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }

// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.