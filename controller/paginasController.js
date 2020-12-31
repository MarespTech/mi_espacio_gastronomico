import { Recipes } from '../models/Recipes.js';
import { Ingredientes } from '../models/Ingredientes.js';
import { Instrucciones } from '../models/Instrucciones.js';

const paginaInicio = async(req, res) => {
    
    const recetas = await Recipes.findAll();

    res.render('recetas', {
        pagina: 'Inicio',
        recetas
    });
}

const paginaReceta = async(req, res) => {
    const { url } = req.params;
    const promiseDB = [];

    try {
        const receta = await Recipes.findOne({ where: { url_recipe: url }});

        promiseDB.push(Ingredientes.findAll({ where: {receta_id: receta.id}}));
        promiseDB.push(Instrucciones.findAll({ where: {receta_id: receta.id}}));
        const resultado = await Promise.all(promiseDB);   
        
        res.render('receta', {
            pagina: 'Receta',
            receta,
            ingredientes: resultado[0],
            instrucciones: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNuevaReceta = (req, res) => {
    res.render('nueva_receta', {
        pagina: 'Nueva receta'
    });
}

const paginaEditarReceta = async(req, res) => {
    const { url } = req.params;
    const promiseDB = [];

    try {
        const receta = await Recipes.findOne({ where: { url_recipe: url }});

        promiseDB.push(Ingredientes.findAll({ where: {receta_id: receta.id}}));
        promiseDB.push(Instrucciones.findAll({ where: {receta_id: receta.id}}));
        const resultado = await Promise.all(promiseDB);   
        
        res.render('editar_receta', {
            pagina: 'Editar receta',
            receta,
            ingredientes: resultado[0],
            instrucciones: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaReceta,
    paginaNuevaReceta,
    paginaEditarReceta
}