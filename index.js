const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const Paymongo = require("paymongo");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


//Get request to root route
app.get("/", function(req, res) {
  console.log("Ofcourse nothing will be displayed! It is under development! But take this since you are persistent!");
  const options = {
    method: 'GET',
    url: 'https://api.paymongo.com/v1/webhooks',
    headers: {
      authorization: 'Basic c2tfdGVzdF83WlFpTlVUd2QyYWpZWnl1RW9zZGtzVVg6'
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    console.log(response);
  });
});


//Server startup message
app.listen(3000, function() {
  console.log("Paymongo server is currently under development! No results would come up in browsers.");
});
