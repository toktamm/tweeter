/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").append($tweet);     //append adds to the end and prepend adds to the front
  }

}


const createTweetElement = function(tweetObject) {
  let $tweet = `<article class="tweet-article">
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
}


$('document').ready(function() {
  renderTweets(data);

  $("#create-tweet").on("submit", function(event) {
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    })
      .done(function(msg) {                // .done is the same as .then
        alert("Data Saved: " + msg);
      });
  })



  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then((tweets) => {
      renderTweets(tweets);
    });

  }

  loadTweets();





});




