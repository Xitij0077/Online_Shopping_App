const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header.token;
  if (authHeader) {
    const token = authHeader.split("")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
      if (error) res.status(403).json("Invalid Token!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to access this page");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to access this page");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
