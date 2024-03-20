const express = require("express");

const authorRoute = express.Router();

authorRoute.get("/", (req, res) => {
  //get request
  res.send("Get All Authors");
});
authorRoute.post("/", (req, res) => {
  //post route
  res.send("Post New Authors");
});
authorRoute.put("/", (req, res) => {
  //put route
  res.send("Put New Authors");
});
authorRoute.delete("/", (req, res) => {
  //delete route
  res.send("Delete All Authors");
});

module.exports = { authorRoute };
