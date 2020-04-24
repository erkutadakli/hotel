const express = require('express');
const router = express.Router();
const RoomController = require('../controller/room')

router.get("/", RoomController.all);
router.post("/", RoomController.create);
router.get("/:id", RoomController.getById);
router.delete("/:id", RoomController.remove);
module.exports = router;