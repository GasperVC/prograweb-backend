import Orden from "../models/Orden.js";
import DetalleOrden from "../models/DetalleOrden.js";
import Productos from "../models/Producto.js";

import EstadoOrden from "../models/EstadoOrden.js";
import Envios from "../models/Envio.js";

import MedioPago from "../models/MedioPago.js";
import Pago from "../models/Pago.js";

import ClienteDireccion from "../models/ClienteDireccion.js";
import Distrito from "../models/Distrito.js";
import Provincia from "../models/Provincia.js";
import Departamentos from "../models/Departamento.js";
import Pais from "../models/Pais.js";

const obtenerDetallesOrden = async (ordenId) => {
  try {
    // Buscar la orden por su id
    const orden = await Orden.findByPk(ordenId);

    if (!orden) {
      throw new Error(`No se encontró la orden con ID ${ordenId}`);
    }

    // Obtener la dirección del cliente asociada a la orden
    const direccionOrden = await ClienteDireccion.findByPk(orden.id_direccion);
    const distrito = await Distrito.findByPk(direccionOrden.id_distrito);
    const provincia = await Provincia.findByPk(distrito.id_provincia);
    const departamento = await Departamentos.findByPk(provincia.id_departamento);
    const pais = await Pais.findByPk(departamento.id_pais);

    const direccion = {
      avenida: direccionOrden.avenida,
      numero: direccionOrden.numero,
      referencia: direccionOrden.referencia,
      distrito: distrito.nombre,
      provincia: provincia.nombre,
      departamento: departamento.nombre,
      pais: pais.nombre,
    };

    // Obtener el estado de la orden
    const estado = await EstadoOrden.findByPk(orden.id_estado);

    // Obtener el método de envío asociado a la orden
    const envio = await Envios.findByPk(orden.id_envio);

    // Obtener el medio de pago y el detalle del pago asociado a la orden
    const medioPago = await MedioPago.findByPk(orden.id_mediopago);
    const pago = await Pago.findByPk(medioPago.id_pago);

    // Obtener los productos asociados a la orden
    const detallesOrden = await DetalleOrden.findAll({
      where: { id_orden: ordenId },
      include: [
        {
          model: Productos,
          attributes: ["nombre", "url"],
        },
      ],
    });

    return {
      orden,
      direccion,
      estado: { nombre: estado.nombre, id: estado.id },
      envio: { nombre: envio.nombre, precio: envio.precio },
      pago: {
        numero: medioPago.numero,
        nombre: medioPago.nombre,
        vencimiento: medioPago.vencimiento,
        nombre_pago: pago.nombre,
        id_pago: pago.id,
      },
      productos: detallesOrden,
    };
  } catch (error) {
    console.error("Error al obtener detalles de la orden:", error);
    return null;
  }
};

const eliminarOrden = async (ordenId) => {
  try {
    // Eliminar todos los detalles de la orden por su id_orden
    await DetalleOrden.destroy({
      where: { id_orden: ordenId },
    });

    // Eliminar la orden principal por su id
    const numFilasEliminadas = await Orden.destroy({
      where: { id: ordenId },
    });

    if (numFilasEliminadas === 0) {
      throw new Error(`No se encontró la orden con ID ${ordenId}`);
    }

    return {
      message: `Se eliminó la orden con ID ${ordenId} y sus detalles asociados correctamente`,
    };
  } catch (error) {
    console.error("Error al eliminar la orden:", error);
    return null;
  }
};

export { obtenerDetallesOrden, eliminarOrden };