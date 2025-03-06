import mongoose from 'mongoose';

const FacturaSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    productos: [{
        productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    metodoPago: {
        nombreTarjeta: { type: String, required: true },
        numeroTarjeta: { type: String, required: true },
        fechaExpiracion: { type: String, required: true },
        cvv: { type: String, required: true }
    },
    fecha: { type: Date, default: Date.now }
});

const Factura = mongoose.model('Factura', FacturaSchema);

export default Factura;