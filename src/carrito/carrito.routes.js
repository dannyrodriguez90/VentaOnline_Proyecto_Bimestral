import { Router } from "express";
import { agregarProductosAlCarrito, obtenerProductosDelCarrito, completarCompra } from "./carrito.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

/**
 * @swagger
 * /agregarCarrito/:
 *   post:
 *     summary: Agregar productos al carrito
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                     cantidad:
 *                       type: number
 *     responses:
 *       200:
 *         description: Productos agregados al carrito con éxito
 *       500:
 *         description: Error al agregar productos al carrito
 */
router.post("/agregarCarrito/", validarJWT, agregarProductosAlCarrito);

/**
 * @swagger
 * /verProductos/:
 *   get:
 *     summary: Ver productos en el carrito
 *     tags: [Carrito]
 *     responses:
 *       200:
 *         description: Productos obtenidos con éxito
 *       500:
 *         description: Error al obtener los productos del carrito
 */
router.get("/verProductos/", validarJWT, obtenerProductosDelCarrito);

/**
 * @swagger
 * /completarCompra/{carritoId}:
 *   post:
 *     summary: Completar la compra
 *     tags: [Carrito]
 *     parameters:
 *       - in: path
 *         name: carritoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreTarjeta:
 *                 type: string
 *               numeroTarjeta:
 *                 type: string
 *               fechaExpiracion:
 *                 type: string
 *               cvv:
 *                 type: string
 *     responses:
 *       200:
 *         description: Compra completada con éxito
 *       500:
 *         description: Error al completar la compra
 */
router.post("/completarCompra/:carritoId", validarJWT, completarCompra);

export default router;