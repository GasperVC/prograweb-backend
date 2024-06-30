import { listarOrdenes } from "../../../repositories/AdmOrdLista.js";

const listarOrdenesController = async (req, res) => {
  try {
    const ordenes = await listarOrdenes();

    if (ordenes && ordenes.length > 0) {
      return res.status(200).json(ordenes); // Devolver directamente el arreglo de órdenes
    } else {
      return res.status(404).json({ message: "No se encontraron órdenes" });
    }
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const controller = { listarOrdenesController };

export default controller;