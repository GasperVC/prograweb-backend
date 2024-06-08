import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'

// Routers
    // Edgar


    // Cliff
import AdUsRegistradosRouter from './src/routes/Administrador/Usuarios/registrados.js';
import AdUsDetalleRouter from './src/routes/Administrador/Usuarios/detalle.js';
import AdOrOrdenesRouter from './src/routes/Administrador/Ordenes/ordenes.js';
import AdOrDetalleRouter from './src/routes/Administrador/Ordenes/detalle.js';

    // Carlo


    // Mauricio


    // Nicolas


    // Erick


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({message: "Hello World"});
})

// Routers
    // Edgar


    // Cliff
app.use('/Admin/UsersLog', AdUsRegistradosRouter);
app.use('/Admin/UsersLog/Detail', AdUsDetalleRouter);
app.use('/Admin/OrdenLog', AdOrOrdenesRouter);
app.use('/Admin/OrdenLog/Detail', AdOrDetalleRouter);

    // Carlo


    // Mauricio


    // Nicolas


    // Erick

app.listen(3001, () => {
    console.log('Server is running on port 3001')
} )