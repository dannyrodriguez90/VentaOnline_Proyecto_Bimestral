import { hash } from 'argon2';
import Usuario from '../src/usuario/usuario.model.js';


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
    } catch (err) {
        console.error("Error al crear usuario administrador o categoría predeterminada:", err);
    }
};

export default createDefaultAdmin;