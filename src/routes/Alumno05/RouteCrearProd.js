import express from "express";
import { obtenerListaProductos, agregarProducto } from "../../controllers/Alumno05/ControllerCrearProd.js";

const router = express.Router();

router.get("/", obtenerListaProductos);
router.post("/crear", agregarProducto);

export default router;
