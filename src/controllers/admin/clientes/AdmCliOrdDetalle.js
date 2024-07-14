import { listarOrdenesCliente } from "../../../repositories/AdmCliRegDetalle.js";

const listarOrdenesClienteController = async (req, res) => {
  const id = req.params.id;

  const result = await listarOrdenesCliente(id);

  return sendResult(result, res);
};
const sendResult = (result, res) => {
  if (result) return res.status(200).json(result);
  else
    return res
      .status(500)
      .json({ message: "Error al obtener las ordenes del cliente" });
};

const controller = { listarOrdenesClienteController };

export default controller;
