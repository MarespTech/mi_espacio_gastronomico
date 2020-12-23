import { Recipes } from '../models/Recipes.js';

const guardarReceta = async(req, res) => {
    const { name_recipe, sender_name, sender_last_name, sender_email, steps_recipe, difficult_recipe, files  } = req.body;
    const errores = [];

    console.log(req.body);
    if(name_recipe.trim() === "") errores.push({ mensaje: 'El nombre de la receta esta vacio'});
    if(sender_name.trim() === "") errores.push({ mensaje: 'Su nombre esta vacio'});
    if(sender_last_name.trim() === "") errores.push({ mensaje: 'Su apellido esta vacio'});
    if(sender_email.trim() === "") errores.push({ mensaje: 'Su correo electronico esta vacio'});
    if(steps_recipe.trim() === "") errores.push({ mensaje: 'Las instrucciones estan vacio'});

    if( errores.length > 0 ) {
        // Mostrar formulario con errores
        res.render('nueva_receta', {
            pagina: 'Nueva receta',
            errores, 
            name_recipe, 
            sender_name, 
            sender_last_name, 
            sender_email, 
            steps_recipe, 
            difficult_recipe
        });
    } 
    else {
        try {
            await Recipes.create({
                name_recipe, 
                sender_name, 
                sender_last_name, 
                sender_email, 
                steps_recipe, 
                difficult_recipe
            })
            // .then(result => console.log(result));

            res.redirect('/');
            
        } catch (error) {
            console.log(error);
        }
    }

}

export { guardarReceta }