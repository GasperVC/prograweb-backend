import express from "express";
import { obtenerListaProductos } from "../../controllers/Alumno05/ControllerListProd.js";

const router = express.Router();

router.get("/", obtenerListaProductos);

export default router;
