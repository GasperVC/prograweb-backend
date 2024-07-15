import { Op } from "sequelize";
import Orden from "../../models/Orden.js";

const getOrdersByDateRange = async (startDate, endDate) => {
  try {
    const count = await Orden.count({
      where: {
        fecha: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });
    return count;
  } catch (error) {
    throw new Error("Error al obtener la cantidad de órdenes: " + error.message);
  }
};

export default { getOrdersByDateRange };
