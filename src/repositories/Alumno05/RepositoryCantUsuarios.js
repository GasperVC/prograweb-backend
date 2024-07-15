import { Op } from "sequelize";
import Cliente from "../../models/Cliente.js";

const getUsersByDateRange = async (startDate, endDate) => {
    try {
      const users = await Cliente.count({
        where: {
          fecha_registro: {
            [Op.between]: [new Date(startDate), new Date(endDate)],
          }
        }
      });
      return users;
    } catch (error) {
      console.error("Error al obtener usuarios por rango de fechas:", error);
      throw error;
    }
  };

export default {getUsersByDateRange};
