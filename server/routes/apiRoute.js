const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController')


router.get('/', apiController.init, apiController.get);


module.exports = router;