import Sequelize from "sequelize";
import db from '../config/db.js';

export const Recipes = db.define('recetas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_recipe: {
        type: Sequelize.STRING
    },
    sender_name: {
        type: Sequelize.STRING
    },
    sender_last_name: {
        type: Sequelize.STRING
    },
    sender_email: {
        type: Sequelize.STRING
    },
    steps_recipe: {
        type: Sequelize.STRING
    },
    difficult_recipe: {
        type: Sequelize.STRING
    }
});