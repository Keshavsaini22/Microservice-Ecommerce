const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'image' }])
router.post('/', () => { });

module.exports = router;