const JWT_SECRET = require("./routes/config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("Authorization Header:", authHeader);
  // console.log("JWT_SECRET:", JWT_SECRET);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  // console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    // console.error("Token verification error:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = {
  authMiddleware,
};
