import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, obtenerProductos } from "./producto.controller.js";
import { crearProductoValidator, editarProductoValidator, eliminarProductoValidator } from "../middlewares/producto-validator.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

router.post("/crearProducto/", [isAdmin, crearProductoValidator], crearProducto);

router.put("/editarProducto/:id", [isAdmin, editarProductoValidator], editarProducto);

router.delete("/eliminarProducto/:id", [isAdmin, eliminarProductoValidator], eliminarProducto);

router.get("/obtenerProductos/", obtenerProductos);

export default router;