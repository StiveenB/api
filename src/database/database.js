import Sequelize from "sequelize";

export const sequelize = new Sequelize('DBCuentasCobrar', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})