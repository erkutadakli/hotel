const express = require('express');
const router = express.Router();
const SeasonController = require('../controller/season')

router.get("/", SeasonController.all);
router.post("/", SeasonController.create);
router.get("/:id", SeasonController.getById);
router.delete("/:id", SeasonController.remove);
module.exports = router;