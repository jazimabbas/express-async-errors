const Errors = require("../libs/custom-errors");

module.exports = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Server Error";

  if (err instanceof Errors.HttpError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({ message });
};
