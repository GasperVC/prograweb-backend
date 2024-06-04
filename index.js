import express from "express";

// Routers
import pagoRouter from './src/routes/pago.js';

const app = express();


app.get('/', (req, res) => {
    return res.json({message: "Hello World"});
})

app.use('/pago', pagoRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001')
} )