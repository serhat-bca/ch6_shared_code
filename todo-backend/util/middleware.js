const jwt = require("jsonwebtoken");

const reqLogger = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.path}`);
  // mask the password if there is any
  const body = req.body?.password
    ? { ...req.body, password: "*****" }
    : req.body;
  console.log("Request Body:", body);
  console.log("----------------------------");
  // dont forget to call next method like mr.sen
  next();
};

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ error: "Unauthorized: Token missing" });
  try {
    const user = jwt.verify(token, process.env.SECRET);
    req.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Token invalid or expired" });
  }
};

module.exports = { reqLogger, authenticateToken };
