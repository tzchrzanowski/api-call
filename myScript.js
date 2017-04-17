$(document).ready(function () {
// document ready:  
var long;
var lat;
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
};
var strApi = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=7734d5a7adb7511d990602dc0f2eadd1";
var strApiTest = "http://api.openweathermap.org/data/2.5/weather?lat=52.2296756&lon=21.012228699999998&APPID=7734d5a7adb7511d990602dc0f2eadd1";

// 3rd api call:
$.ajax(strApiTest);

console.log( $.ajax(strApiTest));
// emd of ready function  
});


