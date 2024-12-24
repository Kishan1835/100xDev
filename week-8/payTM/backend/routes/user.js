const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const router = express.Router();
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
app.post("/signUp", async (req, res) => {
  const body = req.body;
  const { sucess } = signupSchema.safeParse(req.body);
  if (!sucess) {
    return req.json({
      message: "Email already takem / Incorrect Inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return req.json({
      message: "Email already takem / Incorrect Inputs",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  req.json({
    message: "User created successfully",
    token: token,
  });
});

module.exports = router;
