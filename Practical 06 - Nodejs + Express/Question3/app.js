const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const dbconfig = require('./config/database');
const upload = require("./config/multer");
const image = require('./models/image');
const Port = 8080;

//init app
const app = express();

//Mongoose Connect
mongoose.connect(dbconfig.url);

//Load Static
app.use(express.static(path.join(__dirname,'public')))

//Load view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));


//Home Route
app.get('/', ( req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/upload', upload.array('image',10), (req, res) => {
    res.redirect('/dashboard');
})

app.get('/dashboard',  (req,res) => {
    image.find({}, async (err,imgArray) => {
        if (err) {
            console.log(err);
        } else {
            res.render('dashboard', {imgArray:imgArray});
        }
    })
})

app.listen(Port, ()=> {
    console.log(`App is running on ${Port}`)
})
