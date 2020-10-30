const express = require('express');
const app = express();

app.get('/testing', (request, response) => {
  return response.status(200).json({
    message: 'Hello World',
  });
});
