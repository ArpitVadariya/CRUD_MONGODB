const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/testMongoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("Connection Error:", err);
  });

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
  universe: {
    type: String,
    enum: ["Marvel", "DC"], // restricts to only these two values
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
