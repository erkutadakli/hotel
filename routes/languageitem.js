const express = require('express');
const router = express.Router();
const LanguageItemController = require('../controller/languageitem')

router.get("/", LanguageItemController.all);
router.post("/", LanguageItemController.create);
router.get("/:id", LanguageItemController.getById);
router.delete("/:id", LanguageItemController.remove);
module.exports = router;