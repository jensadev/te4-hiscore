const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/api/v1/games');
const scoresRouter = require('./routes/api/v1/scores');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/v1/games', gamesRouter);
app.use('/api/v1/scores', scoresRouter);

module.exports = app;
