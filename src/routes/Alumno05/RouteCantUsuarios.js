import express from "express";
import ClienteController from "../../controllers/Alumno05/ControllerCantUsuarios.js";

const router = express.Router();

router.get("/usersByDate", ClienteController.getUsersByDateRange);

export default router;
