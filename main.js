//NOTES for anyone joining me here in this task, My main issue is with the interpolation and databinding
//I am able to get the information I want from the different APIs (as you can see printing out into the console) but
//I don't know how to make Angular repaint it all

//possible issues:
//      - arising from my misunderstanding of $scope.$apply()
//      - the whole thing needs to be wrapped in the controller and $scope.$apply should be added.


//PLEASE let me know if you have any suggestions that can help me update the page information 

var classApp = angular.module("weatherApp", []);
var replaceLocal = "before replacement";
var replaceTemp = "before replacement";
var replaceWeather = "before replacement";
var replaceGraphic = "before replacement";


classApp.controller("weatherCtrl", ['$http', function ($scope, $http){    
    /*
    document.getElementById("updateTimeButton")
    .addEventListener('click', function() {
$scope.$apply(function() {
    console.log("update time clicked");
    $scope.data.time = new Date();
});
});
  */ 


function init(){return new Promise (function (resolve, reject){
    resolve(
        $.get("http://freegeoip.net/json/",function(data){
    return (data)})
)
}
)}

init().then((data) => {
    lat = data.latitude;
    lon = data.longitude;
    apiKey = "249aae0cc107073d30a1116d9ab51734";
//eventually this  apiKey needs to be removed from the script and hidden for security purposes
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log("lat = " + lat + "lon = " + lon);
    console.log("this is the url to try: " + apiURL);
    return (apiURL);
})
.then((apiURL) => {
        
        $.get(apiURL, function(weatherData){
            console.log("this is happening now " +weatherData.name);// logging [object Object]
            replaceLocal =weatherData.name;   
            replaceTemp = weatherData.main.temp;
            replaceWeather = weatherData.weather.main;
            replaceGraphic = "what";   
            console.log("Still functioning now " +weatherData.main.temp);
            console.log("new variables are " + replaceLocal + " " + replaceTemp);
            return replaceLocal, replaceTemp, replaceWeather, replaceGraphic;
            var vm = $scope;
            vm.$apply(() => {
                    
                    return(
                    vm.info = {
                        local: replaceLocal,
                        temp: replaceTemp,
                        weather: replaceWeather,
                        graphic: replaceGraphic
                    }
                )
                }
            )



        })
        })
            console.log("this is happening now outside of all but still in controller:  " +replaceLocal)
        
    


     }//controller wrapping bracket
    ]//list of controller aarray shits
)//controller wrapping parenthesis



