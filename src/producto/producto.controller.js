import {Producto}from "./producto.model.js";

export const crearProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, categoria } = req.body;

        const nuevoProducto = new Producto({ nombre, descripcion, precio, stock, categoria });
        await nuevoProducto.save();

        res.status(201).json({
            success: true,
            msg: 'Producto creado',
            producto: nuevoProducto,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al crear el producto',
            error: err.message
        });
    }
};

export const editarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const productoActualizado = await Producto.findByIdAndUpdate(id, data, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({
                success: false,
                msg: "Producto no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            msg: 'Producto actualizado',
            producto: productoActualizado,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar el producto',
            error: err.message
        });
    }
};

export const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(404).json({
                success: false,
                msg: "Producto no encontrado"
            });
        }

        await Producto.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            msg: 'Producto eliminado'
        });
    } catch (err) {
        res.status500().json({
            success: false,
            msg: 'Error al eliminar el producto',
            error: err.message
        });
    }
};

export const obtenerProductos = async (_req, res) => {
    try {
        const productos = await Producto.find();

        res.status(200).json({
            success: true,
            productos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al obtener los productos',
            error: err.message
        });
    }
};

export const obtenerProductosMasVendidos = async (req, res) => {
    try {
        const productos = await Producto.find().sort({ ventas: -1 }).limit(10);
        res.status(200).json({
            success: true,
            productos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos más vendidos",
            error: err.message
        });
    }
};

export const buscarProductosPorNombre = async (req, res) => {
    try {
        const { nombre } = req.query;
        const productos = await Producto.find({ nombre: new RegExp(nombre, 'i') }).populate('categoria');
        res.status(200).json({
            success: true,
            productos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al buscar productos por nombre",
            error: err.message
        });
    }
};

export const obtenerProductosPorCategoria = async (req, res) => {
    try {
        const { categoriaId } = req.params;
        const productos = await Producto.find({ categoria: categoriaId }).populate('categoria');
        res.status(200).json({
            success: true,
            productos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos por categoría",
            error: err.message
        });
    }
};