$(function() {
  $("a[target=_blank]").click(function() {
    $("div.overlay").toggleClass("hidden");
    console.log("russ");
    return false;
  });

  $("div.overlay").click(function() {
    $("div.overlay").addClass("hidden");
  });
});
