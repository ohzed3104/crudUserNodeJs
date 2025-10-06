const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUsersId,
} = require("../services/CRUDservice");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();

  return res.render("home.ejs", { listUsers: results }); // render file views/smapleflie
};
const getUserAdd = (req, res) => {
  return res.render("useradd.ejs"); // render file views/smapleflie
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);

  return res.render("edit.ejs", { userEdit: user });
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

  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postEdisUsers = async (req, res) => {
  // console.log("req body o day:", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, city, name, userId);

  // res.send("update user suscces");
  res.redirect("/");
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUsersId(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getUserAdd,
  getUpdatePage,
  postEdisUsers,
  postDeleteUser,
  postHandleRemoveUser,
};
