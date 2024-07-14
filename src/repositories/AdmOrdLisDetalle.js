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

const obtenerDireccionCompleta = async (direccionId) => {
  const direccionOrden = await ClienteDireccion.findByPk(direccionId, {
    include: [Distrito],
  });
  const distrito = await Distrito.findByPk(direccionOrden.id_distrito, {
    include: [Provincia],
  });
  const provincia = await Provincia.findByPk(distrito.id_provincia, {
    include: [Departamentos],
  });
  const departamento = await Departamentos.findByPk(provincia.id_departamento, {
    include: [Pais],
  });
  const pais = await Pais.findByPk(departamento.id_pais);

  return {
    avenida: direccionOrden.avenida,
    numero: direccionOrden.numero,
    referencia: direccionOrden.referencia,
    distrito: distrito.nombre,
    provincia: provincia.nombre,
    departamento: departamento.nombre,
    pais: pais.nombre,
  };
};

const obtenerDetallesOrden = async (ordenId) => {
  try {
    const orden = await Orden.findByPk(ordenId);

    if (!orden) {
      throw new Error(`No se encontró la orden con ID ${ordenId}`);
    }

    const direccion = await obtenerDireccionCompleta(orden.id_direccion);

    const estado = await EstadoOrden.findByPk(orden.id_estado);
    const envio = await Envios.findByPk(orden.id_envio);
    const medioPago = await MedioPago.findByPk(orden.id_mediopago, {
      include: [Pago],
    });

    const detallesOrden = await DetalleOrden.findAll({
      where: { id_orden: ordenId },
      attributes: ["id", "cantidad", "precio_total"],
      include: [{ model: Productos, attributes: ["nombre", "url"] }],
    });

    const pago = {
      numero: medioPago.numero,
      nombre: medioPago.nombre,
      vencimiento: medioPago.vencimiento,
      nombre_pago: medioPago.pago ? medioPago.pago.nombre : null,
      id_pago: medioPago.pago ? medioPago.pago.id : null,
    };

    // Construir el objeto final combinando todos los datos
    const detallesCompletosOrden = {
      orden: {
        ...orden.toJSON(),
      },
      direccion,
      estado: { nombre: estado.nombre, id: estado.id },
      envio: { nombre: envio.nombre, precio: envio.precio },
      pago,
      detalle: detallesOrden.map((detalle) => ({
        id: detalle.id,
        cantidad: detalle.cantidad,
        precio_total: detalle.precio_total,
        nombre: detalle.producto.nombre,
        url: detalle.producto.url,
      })),
    };

    return detallesCompletosOrden;
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
