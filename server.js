require("dotenv").config();
const express = require("express");

//express app
const app = express();

//Port
const port = process.env.PORT || 4000;

//Listen for requests

app.listen(4000, () => {
  console.log(`Listening on port ${port}`);
});
