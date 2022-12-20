// Colton API KEY: AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY
var searchBtn = document.querySelector('#search-button');
var cityEl = document.querySelector('#city');
var addressEl = document.querySelector('#address');
var descriptionEl = document.querySelector('#description');


searchBtn.addEventListener('click', function() {
    console.log("clicked");
})

var apiKey = 'AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY';

function getRestaurants (city) {

};

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json
  //?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
  //&input=Museum%20of%20Contemporary%20Art%20Australia
  //&inputtype=textquery
  //&key=AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY