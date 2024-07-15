import OrdenRepository from "../../repositories/Alumno05/RepositoryIngresos.js";

const getRevenueByDateRange = async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const revenue = await OrdenRepository.getRevenueByDateRange(
      startDate,
      endDate
    );
    res.json({ revenue });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener ingresos por rango de fechas" });
  }
};

export default {getRevenueByDateRange};
