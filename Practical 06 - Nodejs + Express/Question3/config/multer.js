const multer = require('multer');
const path = require('path');
const img = require("../models/image");

//Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/gallery/');
    },
    filename: function (req, file, cb) {

        let filename = 'pasindu-' + req.body.title +  '-' + Date.now() + path.extname(file.originalname);

        let newImage = {imagename:filename};

        img.create(newImage, (err, userDetails) => {
            if (err) {
                console.log(err);
            }
        })

        cb(null, filename);
    }
});

//Init Upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 5000000},
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }

})

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        return cb('Error : Images Only');
    }
}


module.exports = upload;