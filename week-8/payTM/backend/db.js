const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = {
  User,
};
