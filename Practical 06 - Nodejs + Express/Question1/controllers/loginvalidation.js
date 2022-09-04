function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/index');
}

function isLoggedOut(req,res,next) {
    if(!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/home/' + req.user.name);
}

module.exports = {isLoggedIn, isLoggedOut};
