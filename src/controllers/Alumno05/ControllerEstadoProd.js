import { listarEstados, buscarEstadoPorId } from "../../repositories/Alumno05/RepositoryEstadoProd.js";

export const getAll = async (req, res) => {
    try {
      const estados = await listarEstados();
      res.status(200).json(estados);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getById = async (req, res) => {
    try {
      const estado = await buscarEstadoPorId(req.params.id);
      if (estado) {
        res.status(200).json(estado);
      } else {
        res.status(404).json({ message: "Estado no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const create = async (req, res) => {
    try {
      const estado = await EstadoProducto.create(req.body);
      res.status(201).json(estado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const remove = async (req, res) => {
    try {
      const id = req.params.id;
      const estado = await EstadoProducto.findByPk(id);
      if (estado) {
        await estado.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Estado no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const update = async (req, res) => {
    try {
      const { id, nombre } = req.body;
      const estado = await EstadoProducto.findByPk(id);
      if (estado) {
        estado.nombre = nombre;
        await estado.save();
        res.status(200).json(estado);
      } else {
        res.status(404).json({ message: "Estado no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };