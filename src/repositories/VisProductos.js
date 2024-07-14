import Productos from "../models/VistaProductos/ProductosVis.js";
import Serie from "../models/Serie.js";
import Coleccion from "../models/Coleccion.js";
import Categoria from "../models/Categoria.js";

import RepositoryBase from "./base.js";

const productosRepository = new RepositoryBase(Productos);

const listarProductos = async () => {
  try {
    const productos = await Productos.findAll({
      attributes: [
        "id", "nombre", "precio", "marca", "descripcion", "url", 
        "caracteristicas", "stock"
      ],
      include: [
        {
          model: Serie,
          attributes: ["id", "nombre"],
          as: 'serie'
        },
        {
          model: Coleccion,
          attributes: ["id", "nombre"],
          as: 'coleccion'
        },
        {
          model: Categoria,
          attributes: ["id", "nombre"],
          as: 'categoria'
        },
      ],
      order: [
        ["id", "ASC"]
      ]
    });

    const productosAplanados = aplanarProductos(productos);
    return productosAplanados;
  } catch (error) {
    console.error("Error al localizar productos:", error);
    return null;
  }
};


const aplanarProductos = (productos) => {
  return productos.map(producto => {
    const { serie, categoria, coleccion, ...resto } = producto.toJSON();
    return {
      ...resto,
      id_producto: producto.id,
      nombre_producto: producto.nombre,
      precio: producto.precio,
      marca: producto.marca,
      descripcion: producto.descripcion,
      url: producto.url,
      caracteristicas: producto.caracteristicas,
      stock: producto.stock,
      id_serie: serie.id,
      nombre_serie: serie.nombre,
      id_coleccion: coleccion.id,
      nombre_coleccion: coleccion.nombre,
      id_Categoria: categoria.id,
      nombre_Categoria: categoria.nombre,
    };
  });
};

export { listarProductos };
