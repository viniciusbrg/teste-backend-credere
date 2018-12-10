const express = require('express');
const app = express();
const router = require('./src/routes');
const bodyParser = require('body-parser');

// middleware to parse requests body.
app.use(bodyParser.json({}));

// put routes after /probe.
app.use('/probe', router);

app.listen(3000);
