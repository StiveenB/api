import Sequelize from "sequelize";

export const sequelize = new Sequelize('DBCuentasCobrar', 'aplicaciones', 'root', {
    host: 'sdbolanost.database.windows.net',
    dialect: 'postgres'
})