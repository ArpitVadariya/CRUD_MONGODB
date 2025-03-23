const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// HomePage Route
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;

  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  console.log("user created");
  res.redirect("/read");
});

// read user
app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.render("read", { users });
});

// delete user
app.get("/delete/:id", async (req, res) => {
  let user = await userModel.findOneAndDelete({ _id: req.params.id });
  console.log("user deleted");
  res.redirect("/read");
});

app.listen(PORT);
