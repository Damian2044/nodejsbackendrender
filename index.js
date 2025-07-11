import express from "express";
import { EnrutadorArticulo } from "./Rutas/articulosRoutes.js"
import { Articulo } from './Modelos/articulo.js'
import { ArticuloModel } from "./Modelos/articuloDB.js";
import { usuariosRutas } from './Rutas/usuariosRutas.js'
import { Usuarios } from './Modelos/usuarios.js'
import { UsuariosCMDB } from "./Modelos/usuariosDB.js";
import { clientesRutas } from "./Rutas/clientesRutas.js"
import { Clientes } from './Modelos/cliente.js'
import { ClientesCMDB } from "./Modelos/clienteDB.js";
import { conexion } from "./helpers/conexionMDB.js";
import cors from "cors"
import { corsOptions } from "./config/cors.js";
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT || 3000;
const app=express();
app.use(express.json());//Configuramos Express para manejar datos en formato JSON
app.use(cors(corsOptions));
app.use('/api/articulos',EnrutadorArticulo(ArticuloModel));
app.use('/api/usuarios',usuariosRutas(UsuariosCMDB));
app.use('/api/clientes',clientesRutas(ClientesCMDB));
conexion();
app.listen(PORT,()=>{
     console.log(`Servidor corriendo en el puerto ${PORT}...!`);
});
