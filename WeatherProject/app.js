const express = require("express");
const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey = "1681ce71b13e340d5aa5a758ba9b93d9";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=imperial"
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data){
    const weatherData =  JSON.parse(data);
    const weatherDes = weatherData.weather[0].description;
    const temp = weatherData.main.temp;
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";

    res.write("<p>The weather is " + weatherDes + " today</p>");
    res.write("<h1>The temperature in "+ query + " is " + temp + "degrees Farenhieht</h1>");
    res.write("<img src = " + imageURL +">");
    res.send();

    });
  });
});



app.listen(3000, function() {
  console.log("Server running on port 3000");
});
