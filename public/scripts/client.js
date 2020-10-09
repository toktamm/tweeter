/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// render tweets
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").prepend($tweet);
  }
}

// escape for avoiding cross-site scripting
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// create tweet function
const createTweetElement = function(tweetObject) {

  const date = moment(tweetObject.created_at).fromNow();

  let $tweet = `<article class="tweet-article">
    <header class="tweet-header">
      <img class="tweet-avatar" src="${escape(tweetObject.user.avatars)}">
        <h3 class>${escape(tweetObject.user.name)}</h3>
        <h3 class="tweet-handle">${escape(tweetObject.user.handle)}</h3>
    </header>
      <h3>${escape(tweetObject.content.text)}</h3>
      <footer>
        <span class="tweet-date">${escape(date)}</span>
        <span class="tweet-icons">
          <div><i class="fas fa-flag"></i></div>
          <div><i class="fas fa-retweet"></i></div>
          <div><i class="fas fa-heart"></i></div>
        </span>
      </footer>
    </article>`;
  return $tweet;
}


$('document').ready(function() {

  $(".error").hide();

  $("#create-tweet").on("submit", function(event) {
    event.preventDefault();

    $(".error").empty();

    const charCount = $("#tweet-text").val().length;

    if (charCount > 140) {
      $(".error").hide();
      $(".error").append("You exceeded the character limit!").slideDown();
    } else if (charCount === 0) {
      $(".error").hide();
      $(".error").append("Your tweets can't be empty!").slideDown();
    } else {

      console.log($(this).serialize());
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      }).then(() => {
        $(".error").hide();
        $("#tweet-text").val("");
        $(".new-tweet footer .counter").val(140);
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

