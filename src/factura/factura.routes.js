import { Router } from "express";
import { historialFactura } from "./factura.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

/**
 * @swagger
 * /historialFactura/:
 *   get:
 *     summary: Obtener historial de facturas
 *     tags: [Factura]
 *     responses:
 *       200:
 *         description: Historial de facturas obtenido con éxito
 *       500:
 *         description: Error al obtener el historial de facturas
 */
router.get("/historialFactura/", validarJWT, historialFactura);

export default router;