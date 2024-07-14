import {
  clientesRegistrados,
  actualizarEstadoCliente,
} from "../../../repositories/AdmCliRegistrados.js";

const registrados = async (req, res) => {
  const id = req.params.id;
  
  const result = await clientesRegistrados();

  return sendResult(result, res);
};

const actualizarEstado = async (req, res) => {
  const id = req.body.id;
  const nuevoEstadoId = req.body.id_estado;

  if (!nuevoEstadoId) {
    return res.status(400).json({ message: "El nuevo estado es requerido" });
  }

  const result = await actualizarEstadoCliente(id, nuevoEstadoId);
  return sendResult(result, res);
};

const sendResult = (result, res) => {
  if (result) return res.status(200).json(result);
  else return res.status(500).json({ message: "No encontrado." });
};

const controller = { registrados, actualizarEstado };

export default controller;
