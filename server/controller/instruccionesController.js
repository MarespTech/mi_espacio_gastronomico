import { Instrucciones } from '../models/Instrucciones.js';

const guardarInstrucciones = (instrucciones, receta_id) => {
    console.log(instrucciones);
    console.log(receta_id);

    instrucciones.forEach(async(instruccion) => {
        if(instruccion.trim() != "") {
            try {
                await Instrucciones.create({
                    instruccion,
                    receta_id
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}

const editarInstrucciones = async(instrucciones, receta_id) => {
    console.log(instrucciones);
    console.log(receta_id);

    await Instrucciones.destroy({
        where: {
            receta_id
        }
    })

    instrucciones.forEach(async(instruccion) => {
        if(instruccion.trim() != "") {
            try {
                await Instrucciones.create({
                    instruccion,
                    receta_id
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}

const eliminarInstrucciones = async(receta_id) => {
    await Instrucciones.destroy({
        where: {
          receta_id
        }
      });
}

export { guardarInstrucciones,
         editarInstrucciones,
         eliminarInstrucciones      
}