import { hash } from 'argon2';
import Usuario from '../src/usuario/usuario.model.js';
import {Categoria} from '../src/categoria/categoria.model.js';

const createDefaultAdmin = async () => {
    try {
        const adminExists = await Usuario.findOne({ role: "ADMIN_ROLE" });
        if (!adminExists) {
            const adminData = {
                name: "Admin",
                surname: "User",
                username: "admin",
                email: "admin@example.com",
                password: await hash("adminpassword"), 
                phone: "12345678",
                role: "ADMIN_ROLE"
            };
            await Usuario.create(adminData);
            console.log("Usuario administrador creado exitosamente");
        } else {
            console.log("El usuario administrador ya existe");
        }

        const categoriaExists = await Categoria.findOne({ nombre: "Categoría Predeterminada" });
        if (!categoriaExists) {
            const categoriaData = {
                nombre: "Categoría Predeterminada",
            };
            await Categoria.create(categoriaData);
            console.log("Categoría predeterminada creada exitosamente");
        } else {
            console.log("La categoría predeterminada ya existe");
        }
    } catch (err) {
        console.error("Error al crear usuario administrador o categoría predeterminada:", err);
    }
};

const obtenerCategoriaPredeterminada = async () => {
    const categoria = await Categoria.findOne({ nombre: "Categoría Predeterminada" });
    return categoria ? categoria._id : null;
};

export { createDefaultAdmin, obtenerCategoriaPredeterminada };