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

export { guardarInstrucciones }