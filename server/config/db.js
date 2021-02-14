import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log(`BD nombre: ${process.env.DB_NOMBRE}`);
console.log(`Usuario: ${process.env.DB_USER}`);
console.log(`Password: ${process.env.DB_PASS}`);
console.log(`BD Host: ${process.env.DB_HOST}`);
console.log(`BD PORT: ${process.env.DB_PORT}`);

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;