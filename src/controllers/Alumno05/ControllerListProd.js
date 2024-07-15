import { listarProductos } from "../../repositories/Alumno05/RepositoryListaProducto.js";

const obtenerListaProductos = async (req, res) => {
  try {
    const productos = await listarProductos();
    if (!productos) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }
    return res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export { obtenerListaProductos };
