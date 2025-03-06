import { Router } from "express";
import { historialFactura } from "./factura.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/historialFactura/", validarJWT, historialFactura);

export default router;