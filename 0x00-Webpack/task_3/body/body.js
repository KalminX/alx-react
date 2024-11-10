import $ from "jquery";
var _ = require("lodash");

$("body").append("<button>Click here to get started</button>");

$("body").append('<p id="count"></p>');

let i = 0;

function updateCounter() {
  i += 1;
  $("#count").text(i);
}

$("button").on("click", _.debounce(updateCounter, 500));
