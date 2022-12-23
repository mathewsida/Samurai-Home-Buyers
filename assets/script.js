// Colton API KEY: AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY
var searchBtn = document.querySelector('#search-button');
var cityEl = document.querySelector('#city');
var addressEl = document.querySelector('#address');
var descriptionEl = document.querySelector('#description');
var outdoorEl = document.querySelector('#outdoor');
var indoorEl = document.querySelector('#indoor');
var vegetarianEl = document.querySelector('#vegetarian');
var servesAlcoholEl = document.querySelector('#alcohol');
var servesBreakfastEl = document.querySelector('#breakfast');
var servesLunchEl = document.querySelector('#lunch');
var servesDinnerEl = document.querySelector('#dinner');
var deliveryEl = document.querySelector('#delivery');
var curbsidePickupEl = document.querySelector('#curbside');
var ratingEl = document.querySelector('#rating');
var priceEl = document.querySelector('#price');
var takesResEl = document.querySelector('#reservation');
var kidFriendlyEl = document.querySelector('#kid-friendly');


//Map Options (Create Variable to be input to change lat and lng)
function initMap()
{
  var options = 
  {
    center:{lat:47.6062 , lng:-122.3321},
    zoom: 5
  }


  //Dispays map on the page
  map = new google.maps.Map(document.getElementById("map"), options)


//Places marker on the map (Create variable to have input lat and lng)
const marker = new google.maps.Marker
({
    position:{lat:47.620422, lng: -122.349358},
    map:map
    //icon:"insert link here" in case we want to have a custom map marker could be cool haha
})

//infoWindow

const detailWindow = new google.maps.InfoWindow
({
  //Add variable to give info on location at marker i.e. name of restraunt  
  content: '<h2> Space Needle <h2>'
})

 // marker.addEventListener("mouseover", () =>
 // {
  //  detailWindow.open(map,marker)
 // })

  

}

searchBtn.addEventListener('click', function() {
    console.log(cityEl.value);
    getRestaurants();
})

var apiKey = 'AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY';

function getRestaurants (city) {
   var url = `https://maps.googleapis.com/maps/api/place/textsearch/json?fields=formatted_address%2Cname&curbside-pickup&price_level&rating&serves_beer&serves_breakfast&serves_dinner&serves_lunch&serves_vegetarian_food&takeout&delivery&input=Restaurant&inputtype=textquery&key=AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY`
   console.log(url);
   fetch(url)
      .then(function (response) {
        console.log(response)
         return response.json()
      }).then(function (data) {
         console.log(data);


      })
  };

// possible link
// https://maps.googleapis.com/maps/api/place/textsearch/json?fields=formatted_address%2Cname&curbside-pickup&price_level&rating&serves_beer&serves_breakfast&serves_dinner&serves_lunch&serves_vegetarian_food&takeout&delivery&input=Restaurant&inputtype=textquery&key=AIzaSyBIkD8TRPCnwLsy4XuUqCY5UBPpQKqFktY