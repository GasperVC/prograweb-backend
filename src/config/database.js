import Sequelize from "sequelize";

const hostname = "grupo4-db-postgresql-2024-1.postgres.database.azure.com";
const username = "grupo4Mau";
const password = "Proyecto2024123";
const database = "PrograWebDB";
const dbPort = 5432;
const dialect = "postgres";

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  port: dbPort,
  dialect: dialect,
});

export default sequelize;