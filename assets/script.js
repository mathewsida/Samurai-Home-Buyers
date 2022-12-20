// Colton API KEY: AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY
var searchBtn = document.querySelector('#search-button');
var cityEl = document.querySelector('#city');
var addressEl = document.querySelector('#address');
var descriptionEl = document.querySelector('#description');


searchBtn.addEventListener('click', function() {
    console.log('clicked');
    getRestaurants();
})

var apiKey = 'AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY';

function getRestaurants (city) {

};

// possible link
// https://maps.googleapis.com/maps/api/place/textsearch/json?fields=formatted_address%2Cname&dine_in&price_level&serves_dinner&serves_lunch&input=Restaurant&inputtype=textquery&key=AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY