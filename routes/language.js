const express = require('express');
const router = express.Router();
const LanguageController = require('../controller/language')
const checkAuth = require('../middleware/check-auth');
router.get("/", LanguageController.all);
router.post("/", LanguageController.create);
router.get("/:id", LanguageController.getById);
router.delete("/:id", LanguageController.remove);
module.exports = router;