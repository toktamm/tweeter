$(document).ready(function() {
  $("#tweet-text").keyup(function() {           // targeting new-tweet with the tweet-text id
    // const textArea = $(this);
    console.log($(this).val().length);
    let $counter = $(this).parent().find(".counter")
    $counter.val(140 - $(this).val().length);
    if ((140 - $(this).val().length) < 0) {
      $counter.addClass("redcolor");       // i'm not writing .redcolor because it's not a selector here
    } else {
      $counter.removeClass("redcolor");
    }
  })
});

// line 2: for html to select any div we don't write anything
// if you have double quotes inside a string use single quotes for the outside 