const path = require("path");
const express = require("express");
const conFigViewEngine = (app) => {
  // Cấu hình template engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
  // config static file
  app.use(express.static(path.join("./src", "public")));
};
module.exports = conFigViewEngine;
