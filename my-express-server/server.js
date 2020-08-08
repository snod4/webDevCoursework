  const express = require("express");
  const app = express();


  app.get("/", function(req, res){
    res.send("<h1>Yeet yet</h1>");
  });

  app.get("/about", function(req, res){
    res.send("This tells you about me");
  });
  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
