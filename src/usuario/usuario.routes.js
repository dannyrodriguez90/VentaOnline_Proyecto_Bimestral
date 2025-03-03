import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, eliminarUsuario, actualizarContrasena, actualizarUsuario} from "./usuario.controller.js";
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator} from "../middlewares/usuario-validator.js";


const router = Router();

router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);
router.get("/", obtenerUsuarios);
router.delete("/deleteUser/:uid", deleteUserValidator, eliminarUsuario);
router.put("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);
router.put('/updateUser/:uid', updateUserValidator, actualizarUsuario); 


export default router;