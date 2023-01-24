const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res){
    res.send("Response Sent");
})


app.listen(3000, function(){
    console.log("App started and listening to port 3000");
})