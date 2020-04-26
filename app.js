const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middlewares
//import routes
const postRoute = require('./routes/posts.js');

app.use('/posts',postRoute);


//routes
app.get("/", (req, res) => {
  res.send("This is home page");
});


//connect to database
mongoose.connect(
  "mongodb+srv://Shivam:fcbarca1403@rest-gvu8o.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  function(err, db) {
    if (err) {
      console.log(
        "Unable to connect to the server. Please start the server. Error:",
        err
      );
    } else {
      console.log("Connected to Server successfully!");
    }
  }
);

//how to start listening to server
app.listen(3300);
