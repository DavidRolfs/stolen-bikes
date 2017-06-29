(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Bike = function(){
};

Bike.prototype.GetBike = function(city, displayBikes){
  $.get("https://bikeindex.org:443/api/v3/search?page=5&per_page=5&location=" + city + "&distance=10&stolenness=proximity").then(function(response){
    var bikes = response.bikes;
    bikes.forEach(function(element){
    displayBikes(city, element.title);
  });
  console.log("https://bikeindex.org:443/api/v3/search?page=1&per_page=5&location=" + city + "&distance=10&stolenness=proximity");
  })
  .fail(function(error) {
    $('#output').text("try again");
  });
};



exports.bikeModule = Bike;

},{}],2:[function(require,module,exports){
var Bike = require('./../js/scripts.js').bikeModule;

var displayBikes = function(city, bikeData) {
  $('#output').append("<li>" + "Stolen bikes in " + city + " are " + bikeData + "</li>");
};


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    newBike = new Bike();
    var cityInput = $("#cityInput").val();

    newBike.GetBike(cityInput, displayBikes);

  });
});

},{"./../js/scripts.js":1}]},{},[2]);
