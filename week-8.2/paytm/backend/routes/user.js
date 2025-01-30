const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const bcrypt = require("bcrypt");
// Local imports
const { User, Account } = require("../db");
const JWT_SECRET = require("./config"); // Adjust the path if necessary
const { authMiddleware } = require("../middleware");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success, error } = signupSchema.safeParse(body);

  if (!success) {
    return res.status(400).json({
      message: "Invalid input: " + error.message,
    });
  }

  const user = await User.findOne({
    username: body.username,
  });

  // console.log("Checking for existing user:", body.username);
  // console.log("Existing user found:", user);

  if (user) {
    return res.status(400).json({
      message: "Username already exists/ Incorrect Inputs",
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;

  // console.log("Creating user:", body);
  const dbUser = await User.create(body);
  // console.log("User created:", dbUser);

  const userId = dbUser._id;

  // console.log("Creating account for userId:", userId);
  await Account.create({
    UserId: userId,
    balance: 1 + Math.random() * 10000,
  });
  // console.log("Account created with balance for userId:", userId);
  try {
    const token = jwt.sign(
      {
        userId: dbUser._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      message: "userCreated success",
      token: token,
    });
  } catch (error) {
    console.error("Error signing token:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

const signSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success, error } = signSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Incorrect Inputs: " + error.message,
    });
  }

  const user = await User.findOne({ username: req.body.username });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    // console.log("JWT_SECRET:", JWT_SECRET);
    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
    return;
  }

  res.status(401).json({
    message: "Invalid username or password",
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
    return res.status(400).json({
      message: "Error while updating the info",
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    message: "User details updated sucessfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
