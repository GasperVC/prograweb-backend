import Productos from "../../models/Producto.js";
import Serie from "../../models/Serie.js";
import Categoria from "../../models/Categoria.js";
import Coleccion from "../../models/Coleccion.js";
import EstadoProducto from "../../models/EstadoProducto.js";
import RepositoryBase from "../base.js";

const productoRepository = new RepositoryBase(Productos);

const listarProductos = async () => {
  try {
    const productos = await Productos.findAll({
      attributes: ["id", "nombre", "precio", "stock", "marca", "fecha_registro", "descripcion", "caracteristicas", "url"],
      include: [
        { model: Serie, attributes: ["nombre"] },
        { model: Categoria, attributes: ["nombre"] },
        { model: Coleccion, attributes: ["nombre"] },
        { model: EstadoProducto, attributes: ["nombre"] },
      ],
      order: [["nombre", "ASC"]],
    });
    return productos.map((producto) => {
      const { serie, categoria, coleccion, estadoproducto, ...resto } = producto.toJSON();
      return {
        ...resto,
        serie: serie?.nombre || null,
        categoria: categoria?.nombre || null,
        coleccion: coleccion?.nombre || null,
        estado: estadoproducto?.nombre || null,
      };
    });
  } catch (error) {
    console.error("Error al listar productos:", error);
    return null;
  }
};

export { listarProductos };
