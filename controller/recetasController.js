import { Recipes } from '../models/Recipes.js';
import {
    guardarIngredientes
} from '../controller/ingredientesController.js';
import {
    guardarInstrucciones
} from '../controller/instruccionesController.js';

const guardarReceta = async(req, res, next) => {

    const { name_recipe, sender_name, sender_last_name, sender_email, description_recipe, difficult_recipe, ingredientes, instrucciones  } = req.body;
    const file = req.file;
    const errores = [];

    console.log(req.body)
    console.log(file);

    let principal_picture = file ? `uploads/${file.filename}` : 'public/uploads/no-image.jpeg';

    if(name_recipe.trim() === "") errores.push({ mensaje: 'El nombre de la receta esta vacio'});
    if(sender_name.trim() === "") errores.push({ mensaje: 'Su nombre esta vacio'});
    if(sender_last_name.trim() === "") errores.push({ mensaje: 'Su apellido esta vacio'});
    if(sender_email.trim() === "") errores.push({ mensaje: 'Su correo electronico esta vacio'});
    if(description_recipe.trim() === "") errores.push({ mensaje: 'Las instrucciones estan vacio'});

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
            ingredientes,
            instrucciones
        });
    } 
    else {
        let url_recipe = name_recipe.replace(" ", "-");
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
                    guardarIngredientes(ingredientes, result.dataValues.id);
                    guardarInstrucciones(instrucciones, result.dataValues.id);
                });

            res.redirect('/');
            
        } catch (error) {
            console.log(error);
        }
    }

}

export { guardarReceta }