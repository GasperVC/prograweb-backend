import OrdenRepository from "../../repositories/Alumno05/RepositoryCantOrden.js";

const getOrdersByDateRange = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const count = await OrdenRepository.getOrdersByDateRange(startDate, endDate);
    res.json({ count });
  } catch (error) {
    console.error("Error al obtener la cantidad de órdenes:", startDate, endDate);
    res.status(500).json({ error: "Error al obtener la cantidad de órdenes" + startDate + endDate });
  }
};

export default { getOrdersByDateRange };
