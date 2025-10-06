const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
  getUserAdd,
  getUpdatePage,
  postEdisUsers,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/useradd", getUserAdd);
router.get("/edit/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update", postEdisUsers);
router.post("/delete/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
