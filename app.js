import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'

// Routers
import CarritoComprasRouter from './src/routes/CarritoCompras.js';
import CategoriaRouter from './src/routes/Categoria.js';
import ClienteRouter from './src/routes/Cliente.js';
import ClienteDireccionRouter from './src/routes/ClienteDireccion.js';
import ColeccionRouter from "./src/models/Coleccion.js";
import DepartamentosRouter from "./src/models/Departamentos.js";
import DetalleOrdenRouter from "./src/models/DetalleOrden.js";
import DistritoRouter from "./src/models/Distrito.js";
import EnviosRouter from "./src/models/Envios.js";
import EstadoClienteRouter from "./src/models/EstadoCliente.js";
import EstadoOrdenRouter from "./src/models/EstadoOrden.js";
import MedioPagoRouter from "./src/models/MedioPago.js";
import OrdenRouter from "./src/models/Orden.js";
import PagoRouter from "./src/models/Pago.js";
import PaisRouter from "./src/models/Pais.js";
import ProductosRouter from "./src/models/Productos.js";
import ProvinciaRouter from "./src/models/Provincia.js";
import RolRouter from "./src/models/Rol.js";
import SerieRouter from "./src/models/Serie.js";
import UsuarioRouter from "./src/models/Usuario.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World", code: "201" });
});

// Routers
app.use('/carritoCompras', CarritoComprasRouter);
app.use('/categoria', CategoriaRouter);
app.use('/cliente', ClienteRouter);
app.use('/clienteDireccion', ClienteDireccionRouter);
app.use("/coleccion", ColeccionRouter);
app.use('/departamento', DepartamentosRouter);
app.use('/detalleOrden', DetalleOrdenRouter);
app.use("/distrito", DistritoRouter);
app.use("/envio", EnviosRouter);
app.use('/estadoCliente', EstadoClienteRouter);
app.use("/estadoOrden", EstadoOrdenRouter);
app.use('/medioPago', MedioPagoRouter);
app.use('/orden', OrdenRouter);
app.use("/pago", PagoRouter);
app.use("/pais", PaisRouter);
app.use("/producto", ProductosRouter);
app.use("/provincia", ProvinciaRouter);
app.use("/rol", RolRouter);
app.use("/serie", SerieRouter);
app.use("/usuario", UsuarioRouter);

export default app;