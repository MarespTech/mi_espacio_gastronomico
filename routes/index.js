import express from 'express';


const router = express.Router();

router.get('/', (req,res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
});
router.get('/recetas', (req,res) => {
    res.render('recetas', {
        pagina: 'recetas'
    });
});
router.get('/receta', (req,res) => {
    res.render('receta', {
        pagina: 'Receta'
    });
});
router.get('/nueva_receta', (req,res) => {
    res.render('nueva_receta', {
        pagina: 'Nueva receta'
    });
});

export default router;