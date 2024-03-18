const express = require('express');
const router = express.Router();
const multer = require('multer')
const { authController } = require('../controller');
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'image' }])
router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.put('/user',uploadmiddleware,authController.updateUser)
module.exports = router;
