import Sequelize from "sequelize";
import db from '../config/db.js';

export const Ingredientes = db.define('ingredientes', {
    id_ingrediente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ingrediente: {
        type: Sequelize.STRING
    },
    receta_id: {
        type: Sequelize.INTEGER
    }
});