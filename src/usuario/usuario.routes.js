import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, eliminarUsuario, actualizarContrasena, actualizarUsuario, cambiarRolUsuario } from "./usuario.controller.js";
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator } from "../middlewares/usuario-validator.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

/**
 * @swagger
 * /findUser/{uid}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido con éxito
 *       404:
 *         description: Usuario no encontrado
 */
router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *       500:
 *         description: Error al obtener los usuarios
 */
router.get("/", obtenerUsuarios);

/**
 * @swagger
 * /deleteUser/{uid}:
 *   delete:
 *     summary: Eliminar usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       404:
 *         description: Usuario no encontrado
 */
router.delete("/deleteUser/:uid", deleteUserValidator, eliminarUsuario);

/**
 * @swagger
 * /updatePassword/{uid}:
 *   put:
 *     summary: Actualizar contraseña del usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada con éxito
 *       400:
 *         description: La nueva contraseña no puede ser igual a la anterior
 */
router.put("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);

/**
 * @swagger
 * /updateUser/{uid}:
 *   put:
 *     summary: Actualizar datos del usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *       500:
 *         description: Error al actualizar el usuario
 */
router.put('/updateUser/:uid', updateUserValidator, actualizarUsuario);

/**
 * @swagger
 * /cambiarRol/{uid}:
 *   put:
 *     summary: Cambiar rol del usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nuevoRol:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rol del usuario actualizado con éxito
 *       400:
 *         description: Rol no válido
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/cambiarRol/:uid', [validarJWT, isAdmin], cambiarRolUsuario);

export default router;