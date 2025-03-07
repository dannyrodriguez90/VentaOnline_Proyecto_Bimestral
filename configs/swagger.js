import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Venta En Linea API",
            version: "1.0.0",
            description: "API para gestionar la venta de productos en linea",
            contact:{
                name: "Danny Rodriguez",
                email: "drodriguez-2020522@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/proyectoBimestral/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/usuario/usuario.routes.js",
        "./src/categoria/categoria.routes.js",
        "./src/producto/producto.routes.js",
        "./src/carrito/carrito.routes.js",
        "./src/factura/factura.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}