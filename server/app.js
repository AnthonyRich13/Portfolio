const express = require('express');
const path = require('path');
const cors = require('cors');
const kill = require('kill-port');

const app = express();
require("dotenv").config({ path: "./config.env" });

const menu = require('./routes/menu');

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, '.client/public')));

app.use('/', menu);

module.exports = {app};