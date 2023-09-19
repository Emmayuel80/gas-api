const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandler());

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

app.use(require("./routes"));

server.listen(8085, async () => {
  console.log("Server running on http://localhost:8080/");
});
