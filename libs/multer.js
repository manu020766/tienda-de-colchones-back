const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/Upload/',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

module.exports = multer({ storage })