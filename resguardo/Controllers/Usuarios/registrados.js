import middleware from '../../../middleware/Administrador/Usuarios/registrados.js'

const findAll = (req, res) => {

    const result = middleware.findAll();

    return sendResult(result, res);
}

const update = (req, res) => {
    const usuario = req.body;

    const result = middleware.update(usuario);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'});
}

const controller = { findAll, update }

export default controller;