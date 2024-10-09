const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ ClientController');


router.get('/:id', ClientController.getClientProfile);

module.exports = router;
