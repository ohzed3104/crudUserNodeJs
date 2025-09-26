const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
  getUserAdd,
  getUpdatePage,
} = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/useradd", getUserAdd);
router.get("/edit/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
module.exports = router;
