// This is the array where I want to push searched cities into with the variable userInputCity.
var cityList = [];

// This is the "filler" text
var APIkey = "&units=imperial&appid=066a38838a31ae4c7d8440aef4adabcc";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "oakland" + APIkey;

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        // response.list[]
        for (var i = 0; i < response.list.length; i = i + 8) {
            forecastCard(response.list[i])
        }

    })

// if the city list is empty, use oakland query url, else use the second one.

// This is what dynamically creates the forecast cards and appends them to the page
function forecastCard(info) {
    console.log(info)
    var iconPic = "src= 'http://openweathermap.org/img/wn/'" + info.weather[0].icon + "@2x.png";


    var newParentDiv = $("<div class='city-cards col-lg'>")
    var cardTextDiv = $('<div class="card text-white bg-primary mb-3" style="max-width: 14rem;">')
    var datePtag = $('<p class="card-text"></p>').text(info.dt_txt)
    var iconDiv = $('<img class="card-text">').text(iconPic)
    var tempPtag = $('<p class="card-text"></p>').text("Temp: " + info.main.temp + " °F")
    var windPtag = $('<p class="card-text"></p>').text("Humidity: " + info.main.humidity + "%")

    cardTextDiv.append(iconDiv)
    cardTextDiv.append(datePtag)
    cardTextDiv.append(tempPtag)
    cardTextDiv.append(windPtag)
    newParentDiv.append(cardTextDiv)
    $("#forecast-row").append(newParentDiv)


}

// function searchedCityCard() {
//     $(".cities").append(userInputCity)
//     console.log(searchedCityCard)
// }

//This is the search button that populates the big card div
$(".btn").on("click", function (event) {
    event.preventDefault()
    var userInputCity = $("#city-search-input").val();
    var APIkey = "&units=imperial&appid=066a38838a31ae4c7d8440aef4adabcc"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInputCity + APIkey;
    console.log(userInputCity);
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);

            var cityName = response.city.name
            var icon = response.list[0].weather[0].icon
            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var temp = response.list[0].main.temp;
            var iconPic = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            $(".city").html("<h1>" + cityName + "</h1>");
            $(".icon").attr("src", iconPic)
            $(".temp").html("<p>Temperature: " + temp + " F°" + "</p>");
            $(".humidity").html("<p>Humidity: " + humidity + "%" + "</p>");
            $(".wind").html("<p>Wind Speed: " + wind + " MPH" + "</p>")
            $(".uv").html("<p>UV: " + "</p>")
            $("#forecast-row").empty();

            for (var i = 0; i < response.list.length; i = i + 8) {
                forecastCard(response.list[i])

            }
            // $(".cities").html("<tr>" + cityName + "<tr>")
            $(".cities").append('<tr>', cityName)
            // $(".cities").html("<tr>" + cityName + "<tr>")
            // $("tr").on("click", function () {
            //     ".current-city-card".append(cityName)

            // })
        });






    // function citySearchHistory  
    // cityList.push(cityName)


    //LOCAL STORAGE


    //WHEN SEARCH BUTTON IS C: city search should-
    // 1. Add city to history box
    // 1.1 append city to search history box
    // 1.1a create empty array and push search name city into array




    // 2. Display current city in the weather in top upper card 
    // 2.1 Display city name
    // 2.2 display UV Index
    // a. get value of UV index
    // b. color code according to value 
    // 2.3 display temperature
    // 2.4 display humidity 
    // 2.5 display windspeed
    // 2.6 get weather icon from OpenApi (internal, we can use dot notation or traverse the DOM or something like that. )


    // 3. Appear in current city card

    // SHOULD APPEAR IN CURRENT CITY CARD:
    // Temperature,, humidity, windspeed, and UV index.
    // Current card should have temperature, humidity, wind speed, and UV index.
    // 


    // var cityHistoryBox = [];
    // displayCityInfo
    // display
});

// questions for Mahi:
// Do I need a for loop to isolate things within the larger response object?
// Help appending to the page


// LOCAL STORAGE STUFF:

// var searchHistory = ['Pasadena', 'San Jose', 'Los Angeles']
// //JSON.stringify for setting an item that isn't meant to be a string ex. saving an array or an object
// localStorage.setItem('history', JSON.stringify(searchHistory))
// // //JSON.parse for getting an item that is not meant to be a string ex. getting an array or an object (if left without parsing, this item would be a string)
// var stoargeItem = JSON.parse(localStorage.getItem('history'))

// // above is just a holding container when I store the value of whatever is inside, in this case the history of searchd cities.
// console.log(stoargeItem[1])
// // console.log(JSON.parse(parsedStoargeItem).first)