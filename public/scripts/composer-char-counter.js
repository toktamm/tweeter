$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    let $counter = $(this).parent().find(".counter")
    $counter.val(140 - $(this).val().length);
    if ((140 - $(this).val().length) < 0) {
      $counter.addClass("redcolor");
    } else {
      $counter.removeClass("redcolor");
    }
  })
});


