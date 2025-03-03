import { Router } from "express";
import { crearCategoria, editarCategoria, eliminarCategoria, obtenerCategorias } from "./categoria.controller.js";
import { categoriaValidator, editarCategoriaValidator, eliminarCategoriaValidator } from "../middlewares/categoria-validator.js";
import { isAdmin } from "../middlewares/admin.js";

const router = Router();

router.post("/crearCategoria/", [isAdmin, categoriaValidator], crearCategoria);

router.put("/editarCategoria/:id", [isAdmin, editarCategoriaValidator], editarCategoria);

router.delete("/eliminarCategoria/:id", [isAdmin, eliminarCategoriaValidator], eliminarCategoria);

router.get("/obtenerCategorias/", obtenerCategorias);

export default router;