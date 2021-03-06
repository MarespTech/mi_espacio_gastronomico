import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Definir puerto
// const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual y definir nombre de la pagina
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = "Mi espacio gastronomico";
    next();
});

// Agregar Body parser para leer los datos de un formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});