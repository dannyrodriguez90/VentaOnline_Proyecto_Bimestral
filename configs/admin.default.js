/*import { hash } from 'argon2';
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
            console.log("Admin user created successfully");
        } else {
            console.log("Admin user already exists");
        }
    } catch (err) {
        console.error("Error creating admin user or default category:", err);
    }
};

export default createDefaultAdmin;*/