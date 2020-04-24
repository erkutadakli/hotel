const express = require('express');
const router = express.Router();
const settingController = require('../controller/setting')

router.get("/", settingController.all);
router.post("/", settingController.create);
router.get("/:id", settingController.getById);
router.delete("/:id", settingController.remove);
module.exports = router;