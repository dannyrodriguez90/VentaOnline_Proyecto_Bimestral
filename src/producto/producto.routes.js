import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, obtenerProductos, obtenerProductosMasVendidos, buscarProductosPorNombre, obtenerProductosPorCategoria } from "./producto.controller.js";
import { crearProductoValidator, editarProductoValidator, eliminarProductoValidator } from "../middlewares/producto-validator.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

router.post("/crearProducto/", [isAdmin, crearProductoValidator], crearProducto);
router.put("/editarProducto/:id", [isAdmin, editarProductoValidator], editarProducto);
router.delete("/eliminarProducto/:id", [isAdmin, eliminarProductoValidator], eliminarProducto);
router.get("/obtenerProductos/", obtenerProductos);
router.get("/masVendidos/", obtenerProductosMasVendidos);
router.get("/buscar/", buscarProductosPorNombre);
router.get("/categoria/:categoriaId", obtenerProductosPorCategoria);

export default router;