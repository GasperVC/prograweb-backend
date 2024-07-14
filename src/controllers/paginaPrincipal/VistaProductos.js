import { listarProductos } from "../../repositories/VisProductos.js";

const listarProductosController = async (req, res) => {
  try {
    const productos = await listarProductos();
   
    if (productos && productos.length > 0) {
      return res.status(200).json(productos); // Devolver directamente el arreglo de productos
    } else {
      return res.status(404).json({ message: "No se encontraron productos" });
    }
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const controller = { listarProductosController };

export default controller;
