var apiKey = "90a14ba857164508bdd1acbd86d2636f";
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");

//current day
var city = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector(".temp")
var img = document.querySelector(".img")
//day1
var temperature= document.querySelector(".temperature");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
//day2
var temperature2= document.querySelector(".temperature2");
var wind2 = document.querySelector(".wind2");
var humidity2 = document.querySelector(".humidity2");
//day3
var temperature3= document.querySelector(".temperature3");
var wind3 = document.querySelector(".wind3");
var humidity3 = document.querySelector(".humidity3");
//day4
var temperature4= document.querySelector(".temperature4");
var wind4 = document.querySelector(".wind4");
var humidity4 = document.querySelector(".humidity4");
//day5
var temperature5= document.querySelector(".temperature5");
var wind5 = document.querySelector(".wind5");
var humidity5 = document.querySelector(".humidity5");

var searchHist = document.querySelector("#searchHist");
var archive  = JSON.parse(window.localStorage.getItem('archive')) || [];

$(document).ready(function () {
    
$("#searchHist").on('click', 'li', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+$(this).text()+"&units=imperial&appid="+apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        
        var todaysDate = moment().format("dddd, MMMM Do YYYY");
        $(".todaysDate").text(todaysDate);
        city.innerHTML=nameValue;
        temp.innerHTML= "Temperature: " +tempValue;
        desc.innerHTML=descValue;
        //img=imgValue;
        

    });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+$(this).text()+"&units=imperial&appid="+apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //var dateValue= data[]
        var day1 = moment().add(1,'days').format("MM /DD /YY");
        $(".day1").text(day1);
        var temperatureValue = data["list"][1]["main"]["temp"];
        temperature.innerHTML= "Temperature: " +temperatureValue;
        var windValue = data["list"][1]["wind"]["speed"];
        wind.innerHTML = "Wind Speed: "+ windValue;
        var humidityValue = data["list"][1]["main"]["humidity"];
        humidity.innerHTML = "Humidity: "+humidityValue;

        var day2 = moment().add(2,'days').format("MM /DD /YY");
        $(".day2").text(day2);
        var temperatureValue2 = data["list"][2]["main"]["temp"];
        temperature2.innerHTML= "Temperature: " +temperatureValue2;
        var windValue2 = data["list"][2]["wind"]["speed"];
        wind2.innerHTML = "Wind Speed: "+ windValue2;
        var humidityValue2 = data["list"][2]["main"]["humidity"];
        humidity2.innerHTML = "Humidity: "+humidityValue2;

        var day3 = moment().add(3,'days').format("MM /DD /YY");
        $(".day3").text(day3);
        var temperatureValue3 = data["list"][3]["main"]["temp"];
        temperature3.innerHTML= "Temperature: " +temperatureValue3;
        var windValue3 = data["list"][3]["wind"]["speed"];
        wind3.innerHTML = "Wind Speed: "+ windValue3;
        var humidityValue3 = data["list"][3]["main"]["humidity"];
        humidity3.innerHTML = "Humidity: "+humidityValue3;

        var day4 = moment().add(4,'days').format("MM /DD /YY");
        $(".day4").text(day4);
        var temperatureValue4 = data["list"][4]["main"]["temp"];
        temperature4.innerHTML= "Temperature: " +temperatureValue4;
        var windValue4 = data["list"][4]["wind"]["speed"];
        wind4.innerHTML = "Wind Speed: "+ windValue4;
        var humidityValue4 = data["list"][4]["main"]["humidity"];
        humidity4.innerHTML = "Humidity: "+humidityValue4;

        var day5 = moment().add(5,'days').format("MM /DD /YY");
        $(".day5").text(day5);
        var temperatureValue5 = data["list"][5]["main"]["temp"];
        temperature5.innerHTML= "Temperature: " +temperatureValue5;
        var windValue5 = data["list"][5]["wind"]["speed"];
        wind5.innerHTML = "Wind Speed: "+ windValue5;
        var humidityValue5 = data["list"][5]["main"]["humidity"];
        humidity5.innerHTML = "Humidity: "+humidityValue5;


    });
});

function listItems(searchHistory) {
    var li = $('<li>').addClass('list-group-item list-group-item-action').text(searchHistory);
    $('#searchHist').append(li);
}
 
button.addEventListener("click",  function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&units=imperial&appid="+apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        //var iconValue = data["weather"][0]["icon"];
        var todaysDate = moment().format("dddd, MMMM Do YYYY");
        $(".todaysDate").text(todaysDate);
        var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data[weather][0][icon] + ".png")
        city.innerHTML=nameValue;
        temp.innerHTML= "Temperature: " +tempValue;
        desc.innerHTML=descValue;
        img.appendTo('.img');
        

    });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&units=imperial&appid="+apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //var dateValue= data[]
        var day1 = moment().add(1,'days').format("MM /DD /YY");
        $(".day1").text(day1);
        var temperatureValue = data["list"][1]["main"]["temp"];
        temperature.innerHTML= "Temperature: " +temperatureValue;
        var windValue = data["list"][1]["wind"]["speed"];
        wind.innerHTML = "Wind Speed: "+ windValue;
        var humidityValue = data["list"][1]["main"]["humidity"];
        humidity.innerHTML = "Humidity: "+humidityValue;

        var day2 = moment().add(2,'days').format("MM /DD /YY");
        $(".day2").text(day2);
        var temperatureValue2 = data["list"][2]["main"]["temp"];
        temperature2.innerHTML= "Temperature: " +temperatureValue2;
        var windValue2 = data["list"][2]["wind"]["speed"];
        wind2.innerHTML = "Wind Speed: "+ windValue2;
        var humidityValue2 = data["list"][2]["main"]["humidity"];
        humidity2.innerHTML = "Humidity: "+humidityValue2;

        var day3 = moment().add(3,'days').format("MM /DD /YY");
        $(".day3").text(day3);
        var temperatureValue3 = data["list"][3]["main"]["temp"];
        temperature3.innerHTML= "Temperature: " +temperatureValue3;
        var windValue3 = data["list"][3]["wind"]["speed"];
        wind3.innerHTML = "Wind Speed: "+ windValue3;
        var humidityValue3 = data["list"][3]["main"]["humidity"];
        humidity3.innerHTML = "Humidity: "+humidityValue3;

        var day4 = moment().add(4,'days').format("MM /DD /YY");
        $(".day4").text(day4);
        var temperatureValue4 = data["list"][4]["main"]["temp"];
        temperature4.innerHTML= "Temperature: " +temperatureValue4;
        var windValue4 = data["list"][4]["wind"]["speed"];
        wind4.innerHTML = "Wind Speed: "+ windValue4;
        var humidityValue4 = data["list"][4]["main"]["humidity"];
        humidity4.innerHTML = "Humidity: "+humidityValue4;

        var day5 = moment().add(5,'days').format("MM /DD /YY");
        $(".day5").text(day5);
        var temperatureValue5 = data["list"][5]["main"]["temp"];
        temperature5.innerHTML= "Temperature: " +temperatureValue5;
        var windValue5 = data["list"][5]["wind"]["speed"];
        wind5.innerHTML = "Wind Speed: "+ windValue5;
        var humidityValue5 = data["list"][5]["main"]["humidity"];
        humidity5.innerHTML = "Humidity: "+humidityValue5;


    });

   
    if(archive.indexOf(inputValue.value) === -1) {
        archive.push(inputValue.value);
        window.localStorage.setItem("archive", JSON.stringify(archive))
        listItems(inputValue.value)
    }

});

for(var i = 0 ; i<archive.length; i++) {
    listItems(archive[i]);
}
})

