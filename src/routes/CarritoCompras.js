import express from "express";
import controller from "../controllers/CarritoCompras.js";

const router = express.Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.delete("/:id", controller.remove);
router.put("/", controller.update);
router.put("/actualizar-cantidad", controller.actualizarCantidadProducto);
router.delete("/eliminar/:id", controller.eliminarProductoCarrito);
router.put("/guardar-para-despues", controller.moverProductoParaDespues);

export default router;
