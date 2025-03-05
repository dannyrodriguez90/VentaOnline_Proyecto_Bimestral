import Carrito from "./carrito.model.js";

export const agregarProductosAlCarrito = async (req, res) => {
    try {
        const { productos } = req.body;
        const usuarioId = req.usuario._id;

        let carrito = await Carrito.findOne({ usuarioId });

        if (!carrito) {
            carrito = new Carrito({ usuarioId, productos: [] });
        }

        productos.forEach(producto => {
            const productoExistente = carrito.productos.find(p => p.productoId.toString() === producto.productoId);
            if (productoExistente) {
                productoExistente.cantidad += producto.cantidad;
            } else {
                carrito.productos.push({
                    productoId: producto.productoId,
                    cantidad: producto.cantidad
                });
            }
        });

        await carrito.save();

        res.status(200).json({
            success: true,
            message: "Productos agregados al carrito",
            carrito
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al agregar productos al carrito",
            error: err.message
        });
    }
};

export const obtenerProductosDelCarrito = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const carrito = await Carrito.findOne({ usuarioId }).populate('productos.productoId');

        if (!carrito) {
            return res.status(404).json({
                success: false,
                message: "Carrito no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            productos: carrito.productos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos del carrito",
            error: err.message
        });
    }
};