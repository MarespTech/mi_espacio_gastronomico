import express from 'express';
import {
    paginaInicio,
    paginaRecetas,
    paginaReceta,
    paginaNuevaReceta
} from '../controller/paginasController.js';
import {
    guardarReceta
} from '../controller/recetasController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/recetas', paginaRecetas);
router.get('/receta', paginaReceta);
router.get('/nueva_receta', paginaNuevaReceta);
router.post('/nueva_receta', guardarReceta )

export default router;