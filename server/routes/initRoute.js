const express = require('express');
const router = express.Router();
const initController = require('../controller/initController')


router.get('/', initController.get);


module.exports = router;