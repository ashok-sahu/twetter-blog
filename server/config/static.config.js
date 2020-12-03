const morgan = require("morgan");
const path = require("path");
const express = require("express");
const cors = require('cors')
const app = require("../app");
const keys = require("./keys.config");

const { NODE_ENV,CLIENT_URL } = keys;

function getAssets() {
  if (NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
    });
  } else {
    app.use(
      cors({
        origin: CLIENT_URL,
      })
    );
    app.use(morgan("dev"));
    app.use(express.static(path.resolve(__dirname, "../../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
    });
  }
}

module.exports = getAssets;
