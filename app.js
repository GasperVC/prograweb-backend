import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'

// Routers
import CarritoComprasRouter from './src/routes/CarritoCompras.js';
import CategoriaRouter from './src/routes/Categoria.js';
import ClienteRouter from './src/routes/Cliente.js';
import ClienteDireccionRouter from './src/routes/ClienteDireccion.js';
import ColeccionRouter from "./src/routes/Coleccion.js";
import DepartamentosRouter from "./src/routes/Departamento.js";
import DetalleOrdenRouter from "./src/routes/DetalleOrden.js";
import DistritoRouter from "./src/routes/Distrito.js";
import EnviosRouter from "./src/routes/Envio.js";
import EstadoClienteRouter from "./src/routes/EstadoCliente.js";
import EstadoOrdenRouter from "./src/routes/EstadoOrden.js";
import MedioPagoRouter from "./src/routes/MedioPago.js";
import OrdenRouter from "./src/routes/Orden.js";
import PagoRouter from "./src/routes/Pago.js";
import PaisRouter from './src/routes/Pais.js';
import ProductosRouter from "./src/routes/Productos.js";
import ProvinciaRouter from "./src/routes/Provincia.js";
import RolRouter from "./src/routes/Rol.js";
import SerieRouter from "./src/routes/Serie.js";
import UsuarioRouter from "./src/routes/Usuario.js";

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