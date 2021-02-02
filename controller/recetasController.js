import { Recipes } from '../models/Recipes.js';
import {
    guardarIngredientes,
    editarIngredientes,
    eliminarIngredientes
} from '../controller/ingredientesController.js';
import {
    guardarInstrucciones,
    editarInstrucciones,
    eliminarInstrucciones
} from '../controller/instruccionesController.js';
import swal from 'sweetalert';

const guardarReceta = async(req, res, next) => {

    const { name_recipe, sender_name, sender_last_name, sender_email, description_recipe, difficult_recipe, ingredientes, instrucciones  } = req.body;
    const file = req.file;
    const errores = [];

    // console.log(req.body)
    // console.log(file);

    let principal_picture = file ? `uploads/${file.filename}` : 'public/uploads/no-image.jpeg';

    if(name_recipe.trim() === "") errores.push({ mensaje: 'El nombre de la receta esta vacio'});
    if(sender_name.trim() === "") errores.push({ mensaje: 'Su nombre esta vacio'});
    if(sender_last_name.trim() === "") errores.push({ mensaje: 'Su apellido esta vacio'});
    if(sender_email.trim() === "") errores.push({ mensaje: 'Su correo electronico esta vacio'});
    if(description_recipe.trim() === "") errores.push({ mensaje: 'La descripcion esta vacia'});

    if( errores.length > 0 ) {
        // Mostrar formulario con errores
        res.render('nueva_receta', {
            pagina: 'Nueva receta',
            errores, 
            name_recipe, 
            sender_name, 
            sender_last_name, 
            sender_email, 
            description_recipe, 
            difficult_recipe,
            principal_picture,
            ingredientes: Array.isArray(ingredientes) ? ingredientes : [ingredientes],
            instrucciones: Array.isArray(instrucciones) ? instrucciones : [instrucciones]
        });
    } 
    else {
        let url_recipe = name_recipe.replace(/\s/gi, "-");
        try {
            await Recipes.create({
                name_recipe, 
                sender_name, 
                sender_last_name, 
                sender_email, 
                description_recipe, 
                difficult_recipe,
                principal_picture,
                url_recipe
            })
            .then(result => 
                {
                    guardarIngredientes(Array.isArray(ingredientes) ? ingredientes : [ingredientes], result.dataValues.id);
                    guardarInstrucciones(Array.isArray(instrucciones) ? instrucciones : [instrucciones], result.dataValues.id);
                });

            res.redirect('/');
            
        } catch (error) {
            console.log(error);
        }
    }

}

const editarReceta = async(req, res, next) => {
    const { id, name_recipe, sender_name, sender_last_name, sender_email, description_recipe, difficult_recipe, ingredientes, instrucciones, actual_picture, url_recipe } = req.body;
    const file = req.file;
    const errores = [];

    console.log(req.body)
    console.log(file);

    let principal_picture = file ? `uploads/${file.filename}` : actual_picture;

    if(name_recipe.trim() === "") errores.push({ mensaje: 'El nombre de la receta esta vacio'});
    if(sender_name.trim() === "") errores.push({ mensaje: 'Su nombre esta vacio'});
    if(sender_last_name.trim() === "") errores.push({ mensaje: 'Su apellido esta vacio'});
    if(sender_email.trim() === "") errores.push({ mensaje: 'Su correo electronico esta vacio'});
    if(description_recipe.trim() === "") errores.push({ mensaje: 'La descripcion esta vacia'});

    if( errores.length > 0 ) {
        const receta = { id, name_recipe, sender_name, sender_last_name, sender_email, description_recipe, difficult_recipe, principal_picture, url_recipe };
        
        // Mostrar formulario con errores
        res.render(`editar_receta`, {
            pagina: 'Editar receta',
            errores, 
            receta,
            ingredientes: Array.isArray(ingredientes) ? ingredientes : [ingredientes],
            instrucciones: Array.isArray(instrucciones) ? instrucciones : [instrucciones]
        });
    } 
    else {
        let url_recipe = name_recipe.replaceAll(" ", "-");
        try {
            await Recipes.update({
                name_recipe, 
                sender_name, 
                sender_last_name, 
                sender_email, 
                description_recipe, 
                difficult_recipe,
                principal_picture,
                url_recipe
            },
            {
                where: {
                    id
                }
            })
            .then(() => 
                {
                    editarIngredientes(Array.isArray(ingredientes) ? ingredientes : [ingredientes], id);
                    editarInstrucciones(Array.isArray(instrucciones) ? instrucciones : [instrucciones], id);
                });

            res.redirect('/');
            
        } catch (error) {
            console.log(error);
        }
    }
}

const eliminarReceta = async(req, res, next) => {
    const { id } = req.params;
    await Recipes.destroy({
        where: {
            id
        }
    })
    .then( () => {
        eliminarIngredientes(id);
        eliminarInstrucciones(id);            
        
        res.render('eliminar_receta', {
            pagina: 'Eliminar receta'
        });
    });
}

export { guardarReceta,
         editarReceta,
         eliminarReceta
}