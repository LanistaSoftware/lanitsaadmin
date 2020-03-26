const multer  = require('multer');
const path = require('path')
const diskStorageToUploads = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname, '../../../src/assets/upload'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        console.log(file)
    }
});

const saveToUploads = multer({storage: diskStorageToUploads});

module.exports = {
    saveToUploads: saveToUploads.array('file')
}