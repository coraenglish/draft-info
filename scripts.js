$(function() {
  $(".nav-btn").on("click", function(e) {
    e.preventDefault();
    $(".my-img").hide();
    $("." + this.id + "-img").show();
    $(this.id).active();
  });
});

$(document).ready(function() {
  $(".2015-img").hide();
  $(".2016-img").hide();
  $(".2017-img").hide();
  $(".2018-img").hide();
  $(".2019-img").hide();
});

var btnContainer = document.getElementById("myNav");
var btns = btnContainer.getElementsByClassName("nav-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnContainer = document.getElementById("myNav");
var btns = btnContainer.getElementsByClassName("nav-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
