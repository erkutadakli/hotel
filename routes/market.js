const express = require('express');
const router = express.Router();
const MarketController = require('../controller/market')

router.get("/", MarketController.all);
router.post("/", MarketController.create);
router.get("/:id", MarketController.getById);
router.delete("/:id", MarketController.remove);
module.exports = router;