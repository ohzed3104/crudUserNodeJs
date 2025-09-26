const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const morgan = require("morgan");
const hostname = process.env.HOST_NAME;
const webRouters = require("./routes/web");

const conFigViewEngine = require("./config/viewEngine");
require("dotenv").config();

// Middleware log
app.use(morgan("combined"));

// Cấu hình template engine
conFigViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.use("/", webRouters);

// Khởi động server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
