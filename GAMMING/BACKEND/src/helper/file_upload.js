const path = require("path")
const multer = require("multer")
var image_url;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name 
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {

        const img_url = Date.now() + '_img' + path.extname(file.originalname).toLowerCase();
        image_url = img_url;
       
        cb(null, img_url)
    }
})

// Define the maximum size for uploading 
// picture i.e. 1 MB. it is optional 
const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    },
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional 
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());


        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the " +
            "following filetypes - " + filetypes);
    }

    // mypic is the name of file attribute 
}).single("fileName");

module.exports = {
    uploadFile: (req, res, next) => {
       
     
        upload(req, res, function (err) {
            if (err) {

                // ERROR occured (here it can be occured due 
                // to uploading image of size greater than 
                // 1MB or uploading different file type) 
                res.send(err)
            } else {
                req.img_url = image_url;
                next();
            }
        })


    }
};