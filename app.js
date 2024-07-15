import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'

// Routers a la base de datos
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

import Alumno05Productos from "./src/routes/Alumno05/RouteListProd.js";
import EstadoProductoRouter from "./src/routes/Alumno05/RouteEstadoProd.js";
import Alumno05CrearProducto from "./src/routes/Alumno05/RouteCrearProd.js";
import Alumno05RouteCantOrden from "./src/routes/Alumno05/RouteCantOrden.js";
import Alumno05RouteCantUsuarios from "./src/routes/Alumno05/RouteCantUsuarios.js";
import Alumno05RouteIngresos from "./src/routes/Alumno05/RouteIngresos.js";

// Routers a las APIs
import AdminClientesRegisOrden from "./src/routes/admin/clientes/RegistradosYOrdenes.js"
import AdminOrdenesListaDetalle from "./src/routes/admin/ordenes/OrdenesYDetalle.js"
import ProductosList from  "./src/routes/ViewsProduct/ViewsProd.js"

///



const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World", code: "201" });
});

// Routers a la base de datos
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

app.use("/ListProduct", ProductosList);

// Routers a las APIs
app.use("/admin/clientes", AdminClientesRegisOrden); // Cliff
app.use("/admin/ordenes", AdminOrdenesListaDetalle); // Cliff

app.use("/admin/productos", Alumno05Productos); //Dmitri
app.use("/admin/estadoproducto", EstadoProductoRouter); //Dmitri
app.use("/admin/crearproducto", Alumno05CrearProducto); //Dmitri
app.use("/admin/cantidadordenes", Alumno05RouteCantOrden); //Dmitri
app.use("/admin/cantidadusuarios", Alumno05RouteCantUsuarios); //Dmitri
app.use("/admin/ingresos", Alumno05RouteIngresos); //Dmitri


export default app;