require('dotenv').config()
const mongoose = require('mongoose')
const CargarDatosIniciales = require('./Datos/CargaDatosIniciales')
const cors = require('cors')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRoutes = require('./routes/login')
const colchonRoutes = require('./routes/colchones')
const somierRoutes = require('./routes/somieres')
const destacadoRoutes = require('./routes/destacados')

const app = express();

mongoose.connect(process.env.ACADEMIA_CONEXION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once("open", function() {
    console.log("MongoDB connected successfully");
    CargarDatosIniciales(connection)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/destacados', destacadoRoutes)
app.use('/somieres', somierRoutes)
app.use('/colchones', colchonRoutes)
app.use('/login', loginRoutes)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
