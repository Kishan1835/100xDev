// backend/routes/account.js
const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    UserId: req.userId,
  });

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { amount, to } = req.body;

  console.log("Transfer request:", { amount, to });

  // Fetch the accounts
  const account = await Account.findOne({ UserId: req.userId });
  const toAccount = await Account.findOne({ UserId: to });

  // console.log("Account found:", account);
  // console.log("To account found:", toAccount);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  if (!toAccount) {
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  // Perform the transfer
  await Account.updateOne(
    { UserId: req.userId },
    { $inc: { balance: -amount } }
  );
  await Account.updateOne({ UserId: to }, { $inc: { balance: amount } });

  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
