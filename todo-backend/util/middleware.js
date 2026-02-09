const reqLogger = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.path}`);
  console.log("Request Body:", req.body);
  console.log("----------------------------");
  // dont forget to call next method like mr.sen
  next();
};

module.exports = { reqLogger };
