const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
require('dotenv').config();

const secret = process.env.JWT_SECRET

exports.Authenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return ErrorHandler("Acccess Denied, No Authenticed user", 401, req, res)
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (ex) {
    return ErrorHandler("Acccess Denied, incorrect token", 400, req, res)
  }
};
