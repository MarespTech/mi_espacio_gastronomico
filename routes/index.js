import express from 'express';
import multer from 'multer';
import path from 'path';
import {
    paginaInicio,
    paginaRecetas,
    paginaReceta,
    paginaNuevaReceta
} from '../controller/paginasController.js';
import {
    guardarReceta
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
router.get('/recetas', paginaRecetas);
router.get('/recetas/:url', paginaReceta);
// router.get('/receta', paginaReceta);
router.get('/nueva_receta', paginaNuevaReceta);
router.post('/nueva_receta', upload.single('file'), guardarReceta )

export default router;