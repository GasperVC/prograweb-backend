import { listarProductos, crearProducto } from "../../repositories/Alumno05/RepositoryCrearProd.js";

const validarProducto = (data) => {
  const requiredFields = [
    "nombre",
    "precio",
    "marca",
    "descripcion",
    "url",
    "caracteristicas",
    "stock",
    "fecha_registro",
    "id_serie",
    "id_coleccion",
    "id_categoria",
    "id_estado",
  ];

  const missingFields = requiredFields.filter(field => !data[field]);

  if (missingFields.length > 0) {
    return `Faltan los siguientes campos: ${missingFields.join(", ")}`;
  }

  return null;
};

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

const agregarProducto = async (req, res) => {
  const error = validarProducto(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }

  try {
    const nuevoProducto = await crearProducto(req.body);
    if (nuevoProducto) {
      return res.status(201).json(nuevoProducto);
    } else {
      return res.status(400).json({ message: "Error al crear producto" });
    }
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export { obtenerListaProductos, agregarProducto };
