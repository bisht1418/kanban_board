const express = require("express");
const { getBoard, postBoard } = require("../controllers/board.controller");
const boardRoutes = express.Router();

boardRoutes.post("/board", postBoard);
boardRoutes.get("/board", getBoard);

module.exports = { boardRoutes };
