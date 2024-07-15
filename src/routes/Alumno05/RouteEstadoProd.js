import express from "express";
import * as controller from "../../controllers/Alumno05/ControllerEstadoProd.js";

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.remove);
router.put("/", controller.update);

export default router;
