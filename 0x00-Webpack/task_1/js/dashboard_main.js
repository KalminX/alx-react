import $ from "jquery";
var _ = require("lodash");

$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append('<p id="count"></p>');
  $("body").append("<p>Copyright - Holberton School</p>");
  let i = 0;

  function countClicks() {
    i += 1;
    $("#count").text(i);
  }

  $("button").on("click", _.debounce(countClicks, 500));
});
