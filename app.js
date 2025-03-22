const express = require("express");
const app = express();
const PORT = 3000;

const userModel = require("./usermodel");

// HomePage Route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Create Route
app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "ARPIT PATEL",
    username: "arpit",
    email: "arpit@example.com",
  });
  console.log("user created");
  res.send(createdUser);
});

// update
app.get("/update", async (req, res) => {
  let updateUser = await userModel.findOneAndUpdate(
    { email: "arpit@gmail.com" },
    { username: "arpitpatel" },
    { new: true }
  );

  res.json(updateUser.toObject()); // Send updated user as JSON
});

// read
app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.send(users);
});

// delete
app.get("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({ username: "arpitpatel" });

  res.send(user);
});

app.listen(PORT);
