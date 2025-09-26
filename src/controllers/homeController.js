const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();

  return res.render("home.ejs", { listUsers: results }); // render file views/smapleflie
};
const getUserAdd = (req, res) => {
  return res.render("useradd.ejs"); // render file views/smapleflie
};
const getUpdatePage = (req, res) => {
  return res.render("edit.ejs");
};
const postCreateUser = async (req, res) => {
  // console.log("req body o day:", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUE(?, ?,?);`,
    [email, name, city]
  );
  console.log(results);
  res.send("create user suscces");
};
module.exports = {
  getHomepage,
  postCreateUser,
  getUserAdd,
  getUpdatePage,
};
