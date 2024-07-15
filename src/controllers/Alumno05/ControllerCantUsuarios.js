import ClienteRepository from "../../repositories/Alumno05/RepositoryCantUsuarios.js";

const getUsersByDateRange = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
      const users = await ClienteRepository.getUsersByDateRange(startDate, endDate);
      res.json({ count: users.length, users });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener usuarios por rango de fechas" });
    }
  };

export default {getUsersByDateRange};
