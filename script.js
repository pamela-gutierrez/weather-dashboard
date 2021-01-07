// This is the array where I want to push searched cities into with the variable userInputCity.
var cityList = [];

// SEARCH BUTTON NEEDS TO DO THE FOLLOWING:
// 1. add city to history city box
// 2. add city to the current city big card
// 3. set off ajax function to get api info
// 4. Display 5 day forecast in cards


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

            // WHY ISN'T WIND SPEED WORKING?
            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var temp = response.list[0].main.temp;


            // $(userInputCity).append(".current-city-card");
            // How do I navigate through the 
            $(".city").html("<h1>" + userInputCity + "</h1>");
            $(".temp").html("<p>Temperature: " + temp + "</p>");
            $(".humidity").html("<p>Humidity: " + humidity + "</p>");
            $(".wind").html("<p>Wind Speed: " + wind + "</p>")
            $(".uv").html("<p>UV: " + "</p>")


            // $(".wind").html("<p>Wind Speed: " + windSpeed + "</p>");
            // $(".humidity").text("Humidity: " + response.main.humidity);
            // $(".temp").text("Temperature (F) " + response.main.temp);


        });


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
