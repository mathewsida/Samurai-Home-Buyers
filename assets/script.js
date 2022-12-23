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



 if(navigator.geolocation) {
  console.log('geolocation is here!');

  navigator.geolocation.getCurrentPosition((loc) => {
      location.lat = loc.coords.latitude;
      location.lng = loc.coords.longitude;

      map = new google.maps.Map(document.getElementById("map"), options); 
  },
  (err) => {
      console.log('user clocked no lol');
      map = new google.maps.Map(document.getElementById('map'), options);
  }
  )
} else {
  console.log('geolocation is not supported :(');
  map = new google.maps.Map(document.getElementById('map'), options);
}



autocomplete = new google.maps.places.Autocomplete(document.getElementById('city'), {

  componentRestriction: {'country': ['us']},
  fields: ['geometry', 'name'],
  types: ['establishment']
});

autocomplete.addListener('place_changed', () => {
  const place = autocomplete.getPlace();
  new google.maps.Marker({
       position: place.geometry.location,
       title: place.name,
       map: map
      
  })
});

}

searchBtn.addEventListener('click', function() {
    console.log(cityEl.value);
    getRestaurants();
    initMap();
    displayRestaurants();
})





// this function gets all the data from the yelp API

  function getRestaurants() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer DK0XjQWdA4BqtE9d8Bp8a-RVwjtf7EeHoXtmo6S1cGS2b4Atc_qf6kTCwKoH0JFdOW-ocv4yoBAudpgHJ5R6VTjT7FXB14gcEsrsT3KfdwnoOh7RVn3olYulhCelY3Yx'
    }
  };
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + cityEl.value + '&term=restaurants&price=1&price=2&price=3&limit=50', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  }

  function displayRestaurants(data) {
      var { name } = data;
        console.log()
  }
