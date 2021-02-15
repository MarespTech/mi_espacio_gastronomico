import Sequelize from 'sequelize';
import dotenv from 'dotenv';
const result = dotenv.config();
const envs = result.parsed;

const db = new Sequelize(envs.DB_NOMBRE, envs.DB_USER, envs.DB_PASS, {
    host: envs.DB_HOST,
    port: envs.DB_PORT,
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