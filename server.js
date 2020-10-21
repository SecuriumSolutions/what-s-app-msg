/**
 *  @fileoverview Server files 
 * 
 * @created on 21/10/20
 * 
 */
const express = require('express');
const app = express();
const config = require('./config/appConfig.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const server = require('http').Server(app);
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/what-s-app-chapi', err => {
  if (err) {
    throw err;
  }
  console.log('mongodb connected successfully');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    err: err
  });
});

const api = require('./routers/apiRoutes')(app, express);
app.use('/api', api);
app.use(express.static('public'));
app.set('views', path.join(__dirname, "/views"))
app.use('/',checkUser, index);
//  Login Work Start End
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
// server started listening from here
server.listen(config.port, () => console.log(`App listening on port: ${config.port}`));
