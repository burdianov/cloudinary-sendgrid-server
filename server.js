const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// import routes
const feedbackRoutes = require("./routes/feedback");

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api", feedbackRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});