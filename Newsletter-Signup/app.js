const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/fb0b0758d5";
  const options = {
    method: "POST",
    auth: "Chase1:" + getApiKey();
  };

  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      }
      else{
        res.sendFile(__dirname + "/failure.html");
      }

      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();
});


app.post("/failure", function(req, res){
  console.log("Hello");
  res.redirect("/");
});
app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000");
});


//list Id: fb0b0758d5

function getApiKey() {
  console.log("getApiKey");
  var key;
  key = fs.readFileSync(__dirname + "/ApiKey.txt", function(err, data) {
    if(err !== null){
      console.log(err);
    }
  });
