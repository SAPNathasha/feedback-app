const express = require("express");
const body_parser = require("body-parser");
const fs = require("fs");

const app = express();


app.listen(3000, function(){
    console.log("Server running at port 3000");
});