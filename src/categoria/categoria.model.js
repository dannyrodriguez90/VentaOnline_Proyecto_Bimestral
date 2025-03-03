import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Categoria = mongoose.model('Categoria', CategoriaSchema);