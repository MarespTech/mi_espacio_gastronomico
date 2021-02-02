import { Ingredientes } from '../models/Ingredientes.js';

const guardarIngredientes = (ingredientes, receta_id) => {
    ingredientes.forEach(async(ingrediente) => {
        if(ingrediente.trim() != "") {
            try {
                await Ingredientes.create({
                    ingrediente,
                    receta_id
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}

const editarIngredientes = async(ingredientes, receta_id) => {
    await Ingredientes.destroy({
        where: {
            receta_id
        }
    })

    ingredientes.forEach(async(ingrediente) => {
        if(ingrediente.trim() != "") {
            try {
                await Ingredientes.create({
                    ingrediente,
                    receta_id
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}

const eliminarIngredientes = async(receta_id) => {
    await Ingredientes.destroy({
        where: {
            receta_id
        }
    })
}

export { guardarIngredientes,
         editarIngredientes,
         eliminarIngredientes
}