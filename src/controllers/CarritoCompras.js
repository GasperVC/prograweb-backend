import model from "../models/CarritoCompras.js";
import RepositoryBase from "../repositories/base.js";
import {actualizarCantidad, eliminarProducto, guardarParaDespues} from "../repositories/carritoCompras.js";

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
  const result = await repository.findAll();
  return sendResult(result, res);
};

const create = async (req, res) => {
  const payload = req.body;
  const result = await repository.create(payload);
  return sendResult(result, res);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const result = await repository.findOne(id);
  return sendResult(result, res);
};

const remove = async (req, res) => {
  const id = req.params.id;
  const result = await repository.remove(id);
  return sendResult(result, res);
};

const update = async (req, res) => {
  const docente = req.body;
  const result = await repository.update(docente);
  return sendResult(result, res);
};

const actualizarCantidadProducto = async (req, res) => {
  const id = req.body.id;
  const cantidad = req.body.cantidad;

  if (!id || !cantidad) {
    return res.status(400).json({ message: "El ID del producto y la cantidad son requeridos" });
  }

  try {
    const result = await actualizarCantidad(id, cantidad);
    return sendResult(result, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const eliminarProductoCarrito = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "El ID del producto es requerido" });
  }

  try {
    const result = await eliminarProducto(id);
    return sendResult(result, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const moverProductoParaDespues = async (req, res) => {
  const {id} = req.body;

  if (!id) {
    return res.status(400).json({ message: "El ID del producto es requerido" });
  }

  try {
    const result = await guardarParaDespues(id);
    return sendResult(result, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const sendResult = (result, res) => {
  if (result) return res.status(200).json(result);
  else return res.status(500).json({ message: "No encontrado." });
};

const controller = {findAll, create, findOne, remove, update, actualizarCantidadProducto, eliminarProductoCarrito, moverProductoParaDespues
};

export default controller;
