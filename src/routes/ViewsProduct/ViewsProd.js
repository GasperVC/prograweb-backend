import express from 'express';
import controller from '../../controllers/paginaPrincipal/VistaProductos.js';

const router = express.Router();

router.get("/", controller.listarProductosController);

export default router;
