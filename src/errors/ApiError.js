class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static success(message, payload) {
    return new ApiError(200, {
      status: 'Success',
      message: message,
      payload: payload,
    });
  }

  static created(message, payload) {
    return new ApiError(201, {
      status: 'Success',
      message: message,
      payload: payload,
    });
  }

  static badRequest(message) {
    return new ApiError(400, {
      status: 'Error',
      message: message,
      payload: '',
    });
  }

  static emptyFieldsOrParameters(message) {
    return new ApiError(400, {
      status: 'Error',
      message: message,
      payload: '',
    });
  }

  static notFound(message) {
    return new ApiError(404, {
      status: 'Error',
      message: message,
      payload: '',
    });
  }

  static updated(message) {
    return new ApiError(200, {
      status: 'Success',
      message: message,
      payload: '',
    });
  }

  static deleted(message) {
    return new ApiError(200, {
      status: 'Success',
      message: message,
      payload: '',
    });
  }

  static internalServerError(message, payload) {
    return new ApiError(500, {
      status: 'FAILURE',
      message: message,
      payload: payload,
    });
  }
}

module.exports = ApiError;
