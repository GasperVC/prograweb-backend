import { Op } from "sequelize";
import Orden from "../../models/Orden.js";

const getRevenueByDateRange = async (startDate, endDate) => {
  try {
    const revenue = await Orden.sum("total", {
      where: {
        fecha: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });
    return revenue;
  } catch (error) {
    console.error("Error al obtener ingresos por rango de fechas:", error);
    throw error;
  }
};

export default { getRevenueByDateRange };
