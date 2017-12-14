//NOTES This is a restart on the project just trying to get it done

var classApp = angular.module("weatherApp", []);
var replace = "before replacement"

classApp.controller("weatherCtrl", async function ($scope, $http){    
    
$scope.info = {
    local: replace,
    temp: "to be declared then changed",
    weather: "to be declared then changed",
    graphic: "to be declared then changed",
    }
    
    }//controller wrapping bracket
    )//should match to controller 
// SHOULD THE WHOLE THING BE CONTAINIED WITHIN THE CONTROLLER?
const promises = [


]
function init(){return new Promise (function (resolve, reject){
    resolve(
        $.get("http://freegeoip.net/json/",function(data){
    return (data)})
)
}
)}

init().then((data) => {
    console.log(data);
    lat = data.latitude;
    lon = data.longitude;
    apiKey = "249aae0cc107073d30a1116d9ab51734";
//eventually this  apiKey needs to be removed from the script and 
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log("lat = " + lat + "lon = " + lon);
    console.log("this is the url to try: " + apiURL);
    return (apiURL);
})
.then((apiURL) => {
    
        $.get(apiURL, function(weatherData){
            console.log("this is happening now " +weatherData.name);// logging [object Object]
            local = weatherData.name;   
            temp = weatherData.main.temp;
            weather = weatherData.weather.main;
            graphic = "what";   
            return (weatherData); 

        })
    }
    
)
/*
.then((weatherData) => {
    console.log("at end " +weatherData.name);//weatherData is undefined
    return weatherData;
    return info.local = "Post update text here"

}
)
*/
Promise.all//end of promises returning all the information properly - now have to make it plug into the interpolated stuff

function getNewWeather(input){
    //then call the whole thing with

    //make sure to call the function on click after the button is clicked
    //getNewWeather()
}


    //DO THE ABOVE TWO LINES BELONG HERE OR AT THE VERY BOTTOM????
//after you have it all functioning go back and change the lat and lon (or in the new version write so that)
//it takes the city from the initial coords api hit OR the search box and returns the results from that hitting 
//the weather update api site


//gotta push this shit to git
