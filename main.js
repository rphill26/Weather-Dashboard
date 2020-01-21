var city = $("#city").val();
var queryURL = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=52e1c09c466be469c04de22898ae5113';

const printInfo =(data)=>{
  console.log(data)
  let  $h4 = $("<h4>").text(data.name)
  const $temp = $("<div>").text("temperature is at: "+ data.main.temp + "F")
  const $humidity = $("<div>").text("humidty is at: "+ data.main.humidity + "%")
  const $wind = $("<div>").text("the wind speed: " + data.wind.speed + "mph")
  $div.append($h4, $temp, $humidity, $wind)
  
  $("#weather-content").append($div)

}

$('#submit-weather').click(function(){
  $.ajax({
      url: queryURL, 
      method: "GET",
      
    }).then(function(response) {
      printInfo(response);

    });
    
});

    