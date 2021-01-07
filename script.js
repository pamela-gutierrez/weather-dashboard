// This is the array where I want to push searched cities into with the variable userInputCity.
var cityList = [];

// SEARCH BUTTON NEEDS TO DO THE FOLLOWING:
// 1. add city to history city box
// 2. add city to the current city big card
// 3. set off ajax function to get api info
// 4. Display 5 day forecast in cards
var APIkey = "&units=imperial&appid=066a38838a31ae4c7d8440aef4adabcc";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "oakland" + APIkey;

$.ajax({
    url: queryURL,
    method: "GET"
})

    // i++ is shorthand for i= i+1
    .then(function (response) {
        // response.list[]
        for (var i = 0; i < response.list.length; i = i + 8) {
            forecastCard(response.list[i])
        }

    })


function forecastCard(info) {
    console.log(info)
    var newParentDiv = $("<div class='city-cards col-lg'>")
    var cardTextDiv = $('<div class="card text-white bg-primary mb-3" style="max-width: 14rem;">')
    var tempPtag = $('<p class="card-text">').text(info.main.temp)
    var windPtag = $('<p class="card-text">Wind Speed:</p>').text(info.wind.speed)


    cardTextDiv.append(tempPtag)
    cardTextDiv.append(windPtag)
    newParentDiv.append(cardTextDiv)
    $("#forecast-row").append(newParentDiv)

    // <div class="city-cards col-lg">
    //     <div class="card text-white bg-primary mb-3" style="max-width: 14rem;">

    //         <div class="card-body">
    //             <p class="card-text">Some quick example text to build on the card title and make up the
    //             bulk
    //                                 of the card's content.</p>
    //         </div>
    //     </div>
    // </div>
}
// SEARCH BUTTON
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

            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var temp = response.list[0].main.temp;

            $(".searched-city").append()

            // How do I navigate through the 
            $(".city").html("<h1>" + userInputCity + "</h1>");
            $(".temp").html("<p>Temperature: " + temp + "</p>");
            $(".humidity").html("<p>Humidity: " + humidity + "</p>");
            $(".wind").html("<p>Wind Speed: " + wind + "</p>")
            $(".uv").html("<p>UV: " + "</p>")

            forecastCard()
        });



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


    var cityHistoryBox = [];
    // displayCityInfo
    // display
});

// questions for Mahi:
// Do I need a for loop to isolate things within the larger response object?
// Help appending to the page
