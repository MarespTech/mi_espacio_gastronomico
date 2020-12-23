import { Recipes } from '../models/Recipes.js';

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaRecetas = async(req, res) => {
    
    const recetas = await Recipes.findAll();

    res.render('recetas', {
        pagina: 'recetas',
        recetas
    });
}

const paginaReceta = (req, res) => {
    res.render('receta', {
        pagina: 'Receta'
    });
}

const paginaNuevaReceta = (req, res) => {
    res.render('nueva_receta', {
        pagina: 'Nueva receta'
    });
}

export {
    paginaInicio,
    paginaRecetas,
    paginaReceta,
    paginaNuevaReceta
}