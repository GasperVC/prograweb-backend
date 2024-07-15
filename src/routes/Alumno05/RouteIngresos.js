import express from "express";
import OrdenController from "../../controllers/Alumno05/ControllerIngresos.js";

const router = express.Router();

router.get("/revenueByDate", OrdenController.getRevenueByDateRange);

export default router;
