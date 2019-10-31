$(document).ready(function(){
  
  $(".btn").click(function(response){
    
    var city = $("#city").val();
    var APIKey = "&166a433c57516f51dfab1f7edaed8413";
    
    if(city != ""){
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?&" +
        "q=" + city + "&units=imperial&appid=" + APIKey, 
        type: "GET",
        datatype: "jsonp",
        success: function(data){
          console.log(data);
        }
      });

    }else{
      $("#error").html("You didn't add a city!")
    }
    
  });
  
  
});
