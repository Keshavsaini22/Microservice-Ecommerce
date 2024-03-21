const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: './uploads' })

const uploadmiddleware = upload.fields([{ name: 'image' }])
router.post('/', authenticateJWT, uploadmiddleware, () => { });

module.exports = router;

