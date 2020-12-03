const morgan = require("morgan");
const path = require("path");
const express = require("express");
const cors = require('cors')
const app = require("../app");
const keys = require("./keys.config");

function getAssets() {
  if (nodeENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../../web/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../web/build/index.html"));
    });
  } else {
    app.use(
      cors({
        origin: clientURL,
      })
    );
    app.use(morgan("dev"));
    app.use(express.static(path.resolve(__dirname, "../../web/public")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../web/public/index.html"));
    });
  }
}

module.exports = getAssets;
