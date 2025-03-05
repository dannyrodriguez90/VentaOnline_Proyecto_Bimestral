import { hash, verify } from "argon2";
import User from "./usuario.model.js";


export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { uid } = req.params;
        const usuario = await User.findById(uid);

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            usuario
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el usuario",
            error: err.message
        });
    }
};

export const obtenerUsuarios = async (req, res) => {
    try {
        const { limite = 5, desde = 0 } = req.query;
        const query = { status: true };

        const [total, usuarios] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            usuarios
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: err.message
        });
    }
};

export const eliminarUsuario = async (req, res) => {
    try {
        const { uid } = req.params;
        const usuario = await User.findByIdAndDelete(uid);
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Usuario eliminado",
            usuario
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el usuario",
            error: err.message
        });
    }
};

export const actualizarContrasena = async (req, res) => {
    try {
        const { uid } = req.params;
        const { newPassword } = req.body;
        
        const user = await User.findById(uid);

        const contrasenaIgual = await verify(user.password, newPassword);
 
        if (contrasenaIgual) {
            return res.status(400).json({
                success: false,
                message: "La nueva contraseña no puede ser igual a la anterior"
            });
        }
        const contrasenaEncriptada = await hash(newPassword);
        await User.findByIdAndUpdate(uid, { password: contrasenaEncriptada }, { new: true });
        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar contraseña",
            error: err.message
        });
    }
};
 

export const actualizarUsuario = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;
        const usuarioActualizado = await User.findByIdAndUpdate(uid, data, { new: true });
        res.status(200).json({
            success: true,
            msg: 'Usuario Actualizado',
            usuario: usuarioActualizado,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar usuario',
            error: err.message
        });
    }
};

export const cambiarRolUsuario = async (req, res) => {
    try {
        const { uid } = req.params;
        const usuario = await User.findById(uid);

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }

        usuario.role = "ADMIN_ROLE";
        await usuario.save();

        res.status(200).json({
            success: true,
            message: "Rol del usuario actualizado a ADMIN_ROLE",
            usuario
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al cambiar el rol del usuario",
            error: err.message
        });
    }
};
