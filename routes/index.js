import express from 'express';
import multer from 'multer';

import {
    paginaInicio,
    paginaReceta,
    paginaNuevaReceta,
    paginaEditarReceta
} from '../controller/paginasController.js';
import {
    guardarReceta,
    editarReceta,
    eliminarReceta
} from '../controller/recetasController.js';

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname.replace(" ", ""));
    }
});
 
const upload = multer({storage: storage});
const router = express.Router();

router.get('/', paginaInicio);
router.get('/recetas/:url', paginaReceta);
// router.get('/receta', paginaReceta);
router.get('/nueva_receta', paginaNuevaReceta);
router.get('/editar_receta/:url', paginaEditarReceta);
router.get('/eliminar_receta/:id', eliminarReceta);
router.post('/nueva_receta', upload.single('file'), guardarReceta );
router.post('/editar_receta', upload.single('file'), editarReceta );

export default router;