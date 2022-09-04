const bcrypt = require('bcrypt');
const users = require('../models/user');

const register = async (req,res,next) => {

    let autoIncrement;
    users.find({}, async (err,lastUser) => {
        if (err) {
            console.log(err);
        } else {
            if (lastUser.length === 0) {
                autoIncrement = 1;
            } else {
                autoIncrement = lastUser[0]['_id'];
                autoIncrement = autoIncrement + 1;
            }
        }
    }).sort({_id:-1}).limit(1);

    try {
        const hashedpassword = await bcrypt.hash(req.body.password, 10);

        let name = req.body.name;
        let email = req.body.email;
        let password = hashedpassword;

        // console.log(autoIncrement);
        let newUser = {_id:autoIncrement, name:name, email:email, password:password}

        users.create(newUser, (err, userDetails) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/index');
            }
        })
    } catch {
        res.redirect('/register')
    }

}

module.exports = {register};
