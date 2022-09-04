const express = require('express');
const router = express.Router();
const registerController = require("../controllers/registercontroller");
const loginValidation = require('../controllers/loginvalidation');
const passport = require('passport');

router.get('/register', loginValidation.isLoggedOut, (req,res) => {
    res.render('register');
})

router.post('/register',  registerController.register);

router.get('/index', loginValidation.isLoggedOut, (req,res) => {
    res.render('index');
});

router.post('/index',  (req,res) => {
    passport.authenticate("local",  {successRedirect:'/home', failureRedirect:'login?error=true'}, (err, result, info) => {

        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!result) {
            // res.render('/login',{ styles: 'red' });
            res.json({ errors: "Email or Password is Incorrect" });
            return;
        }

        req.logIn(result, (err) => {

            if (err) {
                return res.status(400).json({ errors: err });
            }

            // res.redirect('/dashboard');
            return res.redirect('/home/'+ result.name);

        });
    })(req, res);
});

router
    .route('/:id')
    .get((req,res) => {

    })
    .put((req,res) => {

    })
    .delete((req,res) => {

    })


module.exports = router;
