"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnection } from "./mongo.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import  { createDefaultAdmin } from "./admin.default.js"
import authRoutes from "../src/auth/auth.routes.js"
import usuarioRoutes from "../src/usuario/usuario.routes.js"
import categoriaRoutes from "../src/categoria/categoria.routes.js"
import productoRoutes from "../src/producto/producto.routes.js"
import carritoRoutes from "../src/carrito/carrito.routes.js"
import facturaRoutes from "../src/factura/factura.routes.js"
import { swaggerDocs, swaggerUi } from "./swagger.js" 



const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const conectarDB = async () =>{
    try{
        await dbConnection()
        await createDefaultAdmin();
    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

const routes = (app) => {
    app.use("/proyectoBimestral/v1/auth", authRoutes);
    app.use("/proyectoBimestral/v1/usuario", usuarioRoutes);
    app.use("/proyectoBimestral/v1/categoria", categoriaRoutes);
    app.use("/proyectoBimestral/v1/producto", productoRoutes);
    app.use("/proyectoBimestral/v1/carrito", carritoRoutes);
    app.use("/proyectoBimestral/v1/factura", facturaRoutes);
    app.use("/proyectoBimestral/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

};

export const initServer = () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    }catch(err){
        console.log(`Server init failed: ${err}`)
    }
}