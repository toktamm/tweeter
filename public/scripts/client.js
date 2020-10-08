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
    $(".tweets-container").prepend($tweet);     //append adds to the end and prepend adds to the front
  }
}


const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}




const createTweetElement = function(tweetObject) {
  let $tweet = `<article class="tweet-article">
    <header class="tweet-header">
      <img class="tweet-avatar" src="${escape(tweetObject.user.avatars)}">
        <h3 class>${escape(tweetObject.user.name)}</h3>
        <h3 class="tweet-handle">${escape(tweetObject.user.handle)}</h3>
    </header>
      <h3>${escape(tweetObject.content.text)}</h3>
      <footer>
        <span class="tweet-date">${escape(tweetObject.created_at)}</span>
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

  $("#create-tweet").on("submit", function(event) {
    event.preventDefault();

    const charCount = $("#tweet-text").val().length;

    if (charCount > 140) {
      // alert("you exceeded the character limit!");
      $(".error").append("You exceeded the character limit!").hide();    // using .hide() at the end makes the error slide down
    } else if (charCount === 0) {
      // alert("your tweets can't be empty!");
      const error = $(".error").append("Your tweets can't be empty!").hide();
      return error.slideDown();
    } else {

      console.log($(this).serialize());
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
        .then(() => {
          // $('.tweet-article').remove()         // or: $('.tweets-container .tweet-article').remove()
          $(".error").empty();    // not working?????
          loadTweets();
        });
    }
  })

  // fetching tweets using Ajax
  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then((res) => {
      $(".tweets-container").empty()
      renderTweets(res);
    });

  }

  loadTweets();

});

