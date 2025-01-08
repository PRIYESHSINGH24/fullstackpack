const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("MY NANE PRIYESH SINGH ");
});

app.listen(4000);