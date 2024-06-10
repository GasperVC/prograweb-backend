import middleware from '../../../middleware/Administrador/Ordenes/detalle.js'

const findOne = (req, res) => {

    const id = req.params.id;

    const result = middleware.findOne(id);

    return sendResult(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = middleware.remove(id);

    return sendResult(result, res);
}

const update = (req, res) => {
    //Sin Corregir, sin usar
    const docente = req.body;

    const result = middleware.update(docente);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'});
}

const controller = { findOne, remove, update }

export default controller;
