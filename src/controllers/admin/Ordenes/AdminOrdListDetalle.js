import {
  obtenerDetallesOrden,
  eliminarOrden,
} from "../../../repositories/AdmOrdLisDetalle.js";

const obtenerDetallesOrdenController = async (req, res) => {
  const ordenId = req.params.id;
    console.log(ordenId)
  try {
    const detallesOrden = await obtenerDetallesOrden(ordenId);
    console.log(detallesOrden);

    if (detallesOrden) {
      return res.status(200).json(detallesOrden);
    } else {
      return res
        .status(404)
        .json({ message: `No se encontró una orden con el id ${ordenId}` });
    }
  } catch (error) {
    console.error("Error al obtener detalles de la orden:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const eliminarOrdenController = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la orden desde los parámetros de la solicitud

  try {
    const resultado = await eliminarOrden(id);

    if (resultado) {
      return res.status(200).json({ message: "Orden eliminada exitosamente" });
    } else {
      return res
        .status(404)
        .json({ message: `No se encontró la orden con ID ${id}` });
    }
  } catch (error) {
    console.error("Error al eliminar la orden:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const controller = { obtenerDetallesOrdenController, eliminarOrdenController };

export default controller;