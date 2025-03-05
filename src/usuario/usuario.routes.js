import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, eliminarUsuario, actualizarContrasena, actualizarUsuario, cambiarRolUsuario } from "./usuario.controller.js";
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator } from "../middlewares/usuario-validator.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);
router.get("/", obtenerUsuarios);
router.delete("/deleteUser/:uid", deleteUserValidator, eliminarUsuario);
router.put("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);
router.put('/updateUser/:uid', updateUserValidator, actualizarUsuario);
router.put('/cambiarRol/:uid', [validarJWT, isAdmin], cambiarRolUsuario);

export default router;