//NOTES for anyone joining me here in this task, My main issue is with the interpolation and databinding
//I am able to get the information I want from the different APIs (as you can see printing out into the console) but
//I don't know how to make Angular repaint it all

//possible issues:
//      - arising from my misunderstanding of $scope.$apply()
//      - the whole thing needs to be wrapped in the controller and $scope.$apply should be added.


//PLEASE let me know if you have any suggestions that can help me update the page information

var classApp = angular.module("weatherApp", []);
// this will not suvive minification, use a different, minification safe way to inject services
classApp.controller("weatherCtrl", function ($http) {
        var vm = this;
        vm.info = {
            local: 'local before replace',
            temp: 'temp before replace',
            weather: 'weather before replace',
            graphic: 'graphic before replace',
        }
        vm.$onInit = init;
        return vm;

        function init() {
            getLocation()
            .then((response) => {
                var data = response.data;
                console.log('data', data);
                var lat = data.latitude;
                var lon = data.longitude;
                apiKey = "249aae0cc107073d30a1116d9ab51734";
                //eventually this  apiKey needs to be removed from the script and
                var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                console.log("lat = " + lat + "lon = " + lon);
                console.log("this is the url to try: " + apiURL);
                // return the generated api we will use to get the weather
                return apiURL;
            })
            .then((apiURL) => {
                return $http({
                    method: 'GET',
                    url: apiURL
                }).then((res) => {
                    // we "unwrap" the data from the response,
                    // returning from a then automatically converts to a resolved promise.
                    return res.data;
                });
            }).then((weatherData) => {
                console.log('test: ', weatherData);
                console.log("this is happening now " + weatherData.name); // logging [object Object]
                vm.info.local = weatherData.name;
                vm.info.temp = weatherData.main.temp;
                vm.info.weather = weatherData.weather.main;
                vm.info.graphic = "what";

                // the below line isn't correct
                console.log("Still functioning now " + weatherData.main.temp);
                console.log("new variables are " + vm.info.local + " " + vm.info.temp);
            }).catch((err) => {
                console.error('error', err);
            })
        }
        // makes the second request
        function getWeather() {
            return $http({
                method: 'GET',
                url: ''
            });
        }
        // makes the first request. The $http services RETURNS a promise, which we will handle in the init function
        function getLocation() {
            return $http({
                method: 'GET',
                url: 'http://freegeoip.net/json/'
            });
            // return new Promise(function (resolve, reject) {
            //     resolve(
            //         $.get("http://freegeoip.net/json/", function (data) {
            //             return (data)
            //         })
            //     )
            // })
        }
    } //controller wrapping bracket
) //controller wrapping parenthesis
