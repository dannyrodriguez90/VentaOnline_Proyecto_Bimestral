import { Router } from "express";
import { agregarProductosAlCarrito, obtenerProductosDelCarrito } from "./carrito.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post("/agregarCarrito/", validarJWT, agregarProductosAlCarrito);
router.get("/verProductos/", validarJWT, obtenerProductosDelCarrito);

export default router;