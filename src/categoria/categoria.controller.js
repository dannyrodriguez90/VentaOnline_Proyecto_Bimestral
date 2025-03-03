import { Categoria } from "./categoria.model.js";
import { Producto } from "../producto/producto.model.js";

const CATEGORIA_PREDETERMINADA_ID = "60d21b4667d0d8992e610c85"; // Reemplaza con el ID de tu categoría predeterminada

export const crearCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const nuevaCategoria = new Categoria({ nombre, descripcion });
        await nuevaCategoria.save();

        res.status(201).json({
            success: true,
            msg: 'Categoría creada',
            categoria: nuevaCategoria,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al crear la categoría',
            error: err.message
        });
    }
};

export const editarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const categoria = await Categoria.findById(id);

        if (!categoria) {
            return res.status(404).json({
                success: false,
                msg: "Categoría no encontrada"
            });
        }

        categoria.nombre = nombre || categoria.nombre;
        categoria.descripcion = descripcion || categoria.descripcion;
        categoria.fechaActualizacion = Date.now();

        await categoria.save();

        res.status(200).json({
            success: true,
            msg: 'Categoría actualizada',
            categoria
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar la categoría',
            error: err.message
        });
    }
};

export const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findById(id);

        if (!categoria) {
            return res.status(404).json({
                success: false,
                msg: "Categoría no encontrada"
            });
        }

        // Transferir productos a la categoría predeterminada
        await Producto.updateMany({ categoria: id }, { categoria: CATEGORIA_PREDETERMINADA_ID });

        // Eliminar la categoría
        await Categoria.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            msg: 'Categoría eliminada y productos transferidos a la categoría predeterminada'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al eliminar la categoría',
            error: err.message
        });
    }
};

export const obtenerCategorias = async (_req, res) => {
    try {
        const categorias = await Categoria.find();

        res.status(200).json({
            success: true,
            categorias
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener las categorías',
            error: err.message
        });
    }
};