const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// routes
app.get("/api", (req, res) => {
  res.json({
    data: "you hit api"
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});