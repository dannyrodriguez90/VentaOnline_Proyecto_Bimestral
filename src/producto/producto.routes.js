import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, obtenerProductos, obtenerProductosMasVendidos, buscarProductosPorNombre, obtenerProductosPorCategoria } from "./producto.controller.js";
import { crearProductoValidator, editarProductoValidator, eliminarProductoValidator } from "../middlewares/producto-validator.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

/**
 * @swagger
 * /crearProducto/:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               categoria:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto creado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post("/crearProducto/", [isAdmin, crearProductoValidator], crearProducto);

/**
 * @swagger
 * /editarProducto/{id}:
 *   put:
 *     summary: Editar un producto existente
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto editado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.put("/editarProducto/:id", [isAdmin, editarProductoValidator], editarProducto);

/**
 * @swagger
 * /eliminarProducto/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/eliminarProducto/:id", [isAdmin, eliminarProductoValidator], eliminarProducto);

/**
 * @swagger
 * /obtenerProductos/:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida con éxito
 *       500:
 *         description: Error al obtener los productos
 */
router.get("/obtenerProductos/", obtenerProductos);

/**
 * @swagger
 * /masVendidos/:
 *   get:
 *     summary: Obtener los productos más vendidos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos más vendidos obtenida con éxito
 *       500:
 *         description: Error al obtener los productos más vendidos
 */
router.get("/masVendidos/", obtenerProductosMasVendidos);

/**
 * @swagger
 * /buscar/:
 *   get:
 *     summary: Buscar productos por nombre
 *     tags: [Producto]
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del producto
 *     responses:
 *       200:
 *         description: Productos encontrados con éxito
 *       500:
 *         description: Error al buscar los productos
 */
router.get("/buscar/", buscarProductosPorNombre);

/**
 * @swagger
 * /categoria/{categoriaId}:
 *   get:
 *     summary: Obtener productos por categoría
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: categoriaId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Productos obtenidos con éxito
 *       500:
 *         description: Error al obtener los productos
 */
router.get("/categoria/:categoriaId", obtenerProductosPorCategoria);

export default router;