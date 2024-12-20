const express = require("express");
const UserRouter = require("../routes/user");

const router = express.Router();

router.get("/user", UserRouter);

module.exports = router;
