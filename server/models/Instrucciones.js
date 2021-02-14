import Sequelize from "sequelize";
import db from '../config/db.js';

export const Instrucciones = db.define('instrucciones', {
    id_instruccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    instruccion: {
        type: Sequelize.STRING
    },
    receta_id: {
        type: Sequelize.INTEGER
    }
});