import CarritoCompras from "../models/CarritoCompras.js";

export const actualizarCantidad = async (id, cantidad) => {
  try {
    const carritoItem = await CarritoCompras.findByPk(id);
    if (!carritoItem) throw new Error("Producto no encontrado en el carrito");

    carritoItem.cantidad = cantidad;
    await carritoItem.save();
    return carritoItem;
  } catch (error) {
    throw error;
  }
};

export const eliminarProducto = async (id) => {
  try {
    const result = await CarritoCompras.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw error;
  }
};

export const guardarParaDespues = async (id) => {
  try {
    const carritoItem = await CarritoCompras.findByPk(id);
    if (!carritoItem) throw new Error("Producto no encontrado en el carrito");

    carritoItem.es_para_despues = true;
    await carritoItem.save();
    return carritoItem;
  } catch (error) {
    throw error;
  }
};
