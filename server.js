const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/e18-analytique'));
app.listen(process.env.PORT || 8080);