const express = require("express");
const zod = require("zod");
const bcrypt = require("bcrypt");
const { User } = require("../db");
const router = express.Router();
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

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

  const user = await User.findOne({
    username: body.username,
  });

  const hashedPassword = await bcrypt.hash(body.password, 10);
  console.log(hashedPassword);

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

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Error while updating the info",
    });
  }

  await User.updateOne(req.dody, {
    id: req.userId,
  });

  res.json({
    message: "User details updated sucessfully",
  });
});

module.exports = router;
