const express = require ("express");
const notitasRouter = express.Router();
const notitasController = require("../controllers/notitasController");

notitasRouter.get("/", notitasController.index);
notitasRouter.delete("/:id", notitasController.delete);
notitasRouter.put("/", notitasController.create);

notitasRouter.get("/edit/:id", notitasController.edit);
notitasRouter.put("/edit/:id", notitasController.editSave);

module.exports = notitasRouter;
