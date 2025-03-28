var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');
const pagesRouter = require('./routes/pages');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pages', pagesRouter);
app.use('/rest', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use((req, res, next) => {
  res.status(404).send('Pagina non trovata');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Errore del server');
});

module.exports = app;
