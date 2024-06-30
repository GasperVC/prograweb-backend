import express from "express";
import controller1 from "../../../controllers/admin/clientes/AdmCliRegistrados.js";
import controller2 from '../../../controllers/admin/clientes/AdmCliOrdDetalle.js';

const router = express.Router();

router.get("/:id", controller2.listarOrdenesClienteController);
router.get("/", controller1.registrados);
router.put("/modificar", controller1.actualizarEstado);

export default router;
