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
