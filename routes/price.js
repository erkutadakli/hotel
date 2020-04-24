const express = require('express');
const router = express.Router();
const PriceController = require('../controller/price')

router.get("/", PriceController.all);
router.post("/", PriceController.create);
router.get("/:id", PriceController.getById);
router.delete("/:id", PriceController.remove);
module.exports = router;