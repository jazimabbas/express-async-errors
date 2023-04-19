class HttpError extends Error {
  statusCode;

  constructor({ message, statusCode }) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

class BadRequestError extends HttpError {
  statusCode = 400;
}

class NotFoundError extends HttpError {
  statusCode = 404;
}

module.exports = { HttpError, BadRequestError, NotFoundError };
