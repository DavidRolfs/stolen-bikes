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
