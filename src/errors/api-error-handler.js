const ApiError = require('./ApiError');

function apiErrorHandler(err, request, response, next) {
  console.log(err);
  if (err instanceof ApiError) {
    response.status(err.code).json(err.message);
    return;
  } else {
    return response.status(500).json({
      status: 'FAILURE',
      message: 'INTERNAL SERVER ERROR ❌',
      payload: '',
    });
  }
}

module.exports = apiErrorHandler;
