$(document).ready(function() {
  $("#tweet-text").keyup(function() {     // targeting new-tweet with the tweet-text id
    console.log($(this));
    console.log($("#tweet-text"));
    console.log($('<textarea name="text" id="tweet-text" placeholder="What are you humming about?"></textarea>'));
  })
});

// line 2: for html to select any div we don't write anything
// if you have double quotes inside a string use single quotes for the outside 