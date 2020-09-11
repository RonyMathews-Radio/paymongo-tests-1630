const express = require("express");
const bodyParser = require("body-parser");
const Paymongo = require("paymongo");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded( { extended: true }));


//Get request to root route
app.get("/", function(req, res){
  console.log("Ofcourse nothing will be displayed! It is under development!");
});


//Server startup message
app.listen(3000, function(){
  console.log("Paymongo server is currently under development! No results would come up in browsers.");
});
