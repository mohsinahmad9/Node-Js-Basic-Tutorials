const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'public');
// __filename
console.log(publicpath);

app.use(express.static(publicpath));

app.listen(6500);

