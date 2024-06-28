import middleware from '../../../middleware/Administrador/Usuarios/detalle.js'

const findOne = (req, res) => {

    const id = req.params.id;

    const result = middleware.findOne(id);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'});
}

const controller = { findOne }

export default controller;