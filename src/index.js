const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const apiErrorHandler = require('../src/errors/api-error-handler');

app.use(express.json());
app.use('/', router);

app.use(apiErrorHandler);
app.listen(3331, () => console.log('The server is running 🚀'));
