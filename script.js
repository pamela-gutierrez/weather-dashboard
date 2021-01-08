// This is the array that will be populated by with city search history based on the userInputVariable. It will then be stringified so and go into the setItem part of the local storage so we can call it later. 
// var city will temporarily be a string until we getItem and the parse method to once again turn that string into an object.
var cityList = [];


// This was an attempt to set a default city for when the page loads. The idea was to say that if the div with the class of current-city-card is empty, display the information for Oakland. Otherwise, display the information for the userInputCity.
// if ($('.current-city-card').is(':empty')) {
// $(".current-city-card").show


// This is the "filler" text of Oakland
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


            $("#forecast-row").empty();

            for (var i = 0; i < response.list.length; i = i + 8) {
                forecastCard(response.list[i])

            }

            var newTableRow = $('<tr>').text(cityName);
            $(".cities").append(newTableRow);

            var lat = response.city.coord.lat;
            var lon = response.city.coord.lon;
            var APIkey = "066a38838a31ae4c7d8440aef4adabcc"
            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey


            $.ajax({
                url: uvURL,
                method: "GET"
            })

                .then(function (response) {
                    console.log(response)
                    var uvResult = response.value
                    $(".uv").html("<p>UV: " + uvResult + "</p>")
                })

            // These are conditional statements that should change the color of the uv index if the conditions are low, moderate, or extreme

            if (uvResult < 2) {
                uv.css('background-color', 'green');
            } else if (result = 5) {
                uv.css('background-color', 'yello');
            } else if (result > 8) {
                uv.css('background-color', 'red')
            }

        });

    // This was intended to push city information gathered from the ajax call and push it into the searche city object to be called later by local storage. 
    cityList.push(cityName)



    localStorage.setItem('history', JSON.stringify(cityList))
    var storageItem = JSON.parse(localStorage.getItem('history'))


    //LOCAL STORAGE



});



// LOCAL STORAGE STUFF: How it shouuuuld work. 
// var searchHistory = ['Pasadena', 'San Jose', 'Los Angeles']
// //JSON.stringify for setting an item that isn't meant to be a string ex. saving an array or an object
// localStorage.setItem('history', JSON.stringify(searchHistory))
// // //JSON.parse for getting an item that is not meant to be a string ex. getting an array or an object (if left without parsing, this item would be a string)
// var stoargeItem = JSON.parse(localStorage.getItem('history'))
// console.log(stoargeItem[1])
// // console.log(JSON.parse(parsedStoargeItem).first)