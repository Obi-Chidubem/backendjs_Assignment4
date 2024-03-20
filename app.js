const express = require("express");
require("dotenv").config();
const { authorRoute } = require("./routes/authors");

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(201).send("All Good");
});

app.use("/authors", authorRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
