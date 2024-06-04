import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({message:"Nueva ruta 1", paso: 1})
});

export default router;