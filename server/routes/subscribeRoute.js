const express = require('express');
const router = express.Router();

const subscribeController = require('../controller/subscribeController');

router.get('/:id', subscribeController.getById);
router.post('/', subscribeController.post);
router.post('/confirm/:id', subscribeController.confirm);
router.post('/cancel/:id', subscribeController.cancel);

module.exports = router;