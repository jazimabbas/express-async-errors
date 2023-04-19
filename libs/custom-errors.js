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

class UnauthorizedError extends HttpError {
  statusCode = 401;
}

module.exports = { HttpError, BadRequestError, NotFoundError, UnauthorizedError };
