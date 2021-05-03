
// Db && Config
require("./src/db/db");
require('dotenv').config({ path: "config.env" });
  

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const globalErrorHandler = require("./src/helpers/globalError.handler")

//Body Parser middleware && config

app.use(bodyParser.urlencoded({ extended: false }));
console.log("------♥♥♥♥♥♥--------");

//  globalErrorHandler   ||  handle unhandled routes  
app.use("*", globalErrorHandler);
app.listen(() => {
    console.log(` app listening at http://localhost:`+ process.env.port)
})

//handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log(" UNHANDLED REJECTION ☹️☹️");
    server.close(() => {
        process.exit(1)
    })
});