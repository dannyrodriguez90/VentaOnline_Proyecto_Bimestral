import { Router } from "express";
import { crearCategoria, editarCategoria, eliminarCategoria, obtenerCategorias } from "./categoria.controller.js";
import { categoriaValidator, editarCategoriaValidator, eliminarCategoriaValidator } from "../middlewares/categoria-validator.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

/**
 * @swagger
 * /crearCategoria/:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categoría]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría creada con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post("/crearCategoria/", [isAdmin, categoriaValidator], crearCategoria);

/**
 * @swagger
 * /editarCategoria/{id}:
 *   put:
 *     summary: Editar una categoría existente
 *     tags: [Categoría]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría editada con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.put("/editarCategoria/:id", [isAdmin, editarCategoriaValidator], editarCategoria);

/**
 * @swagger
 * /eliminarCategoria/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categoría]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/eliminarCategoria/:id", [isAdmin, eliminarCategoriaValidator], eliminarCategoria);

/**
 * @swagger
 * /obtenerCategorias/:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categoría]
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida con éxito
 *       500:
 *         description: Error al obtener las categorías
 */
router.get("/obtenerCategorias/", obtenerCategorias);

export default router;