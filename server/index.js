import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

console.log(`BD nombre: ${process.env.DB_NOMBRE}`);
console.log(`Usuario: ${process.env.DB_USER}`);
console.log(`Password: ${process.env.DB_PASS}`);
console.log(`BD Host: ${process.env.DB_HOST}`);
console.log(`BD PORT: ${process.env.DB_PORT}`);

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