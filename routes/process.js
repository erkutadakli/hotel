const express = require('express');
const router = express.Router();
const processController = require('../controller/process')
const checkAuth = require('../middleware/check-auth');
router.get("/search", processController.findPrice);
module.exports = router;