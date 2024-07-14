import express from "express";
import controller1 from "../../../controllers/admin/Ordenes/AdmOrdLista.js";
import controller2 from "../../../controllers/admin/Ordenes/AdminOrdListDetalle.js";

const router = express.Router();

router.get("/", controller1.listarOrdenesController);
router.get("/detalle/:id", controller2.obtenerDetallesOrdenController);
router.delete("/detalle/:id", controller2.eliminarOrdenController);

export default router;
