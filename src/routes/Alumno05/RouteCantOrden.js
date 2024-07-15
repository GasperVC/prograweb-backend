import express from "express";
import OrdenController from "../../controllers/Alumno05/ControllerCantOrden.js";

const router = express.Router();

router.get("/ordersByDate", OrdenController.getOrdersByDateRange);

export default router;
