const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const dbconfig = require('./config/database');

const Port = 3000;

let users = require('./routes/users');

const app = express();  //init app

mongoose.connect(dbconfig.url); //connecting mongoose

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(session ({
        secret: "secret-key",
        resave: true,
        saveUninitialized: true,
    })
);

require('./config/passport')(passport);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

//Login
app.get('/', function(req, res){
  res.render('index.ejs');      //response send to the browser
});

//Logout
app.get("/logout", (req, res) => {
    req.logout(req.user, (err,next) => {
        if(err) {
            return next(err);
        }
        res.redirect('/');
    });
});

//route files
const userRouter = require('./routes/users');
app.use('/',userRouter);

app.listen(Port, function(){
    console.log('Server started...');   //start server
});
