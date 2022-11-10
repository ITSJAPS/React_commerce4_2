import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routeAPI from './api/v1/routes/index';


//Japs: imports Swagger
//Japs: imports Routes
//Japs: imports Middlewares
//Japs: Config para variables de entorno
import config from './config/config';
//Japs: Declaramos la variable app igualandola a express
const app = express();

//importe para la base de taos de mongo 
import { mongoose } from './config/database.config';

//Japs: Settings
app.set('port', config.PORT);
//Japs: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Japs: Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/Japs', (req,res)=>{
    res.send(
        `<h1>RESTful running in Japs</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
// Routes
routeAPI(app);



// Swagger Docs
// Middleware para el manejo de errores
// Export App
export default app;