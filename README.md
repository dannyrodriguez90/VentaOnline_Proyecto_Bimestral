# VentaOnline - Proyecto Bimestral

## Descripción
VentaOnline es una aplicación web para la gestión de ventas en línea. Permite a los administradores gestionar productos, categorías y usuarios con diferentes roles. Está construida con **Node.js, Express y MongoDB**.

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para la creación de APIs.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de datos.
- **JWT**: Autenticación mediante tokens.
- **Swagger**: Documentación de la API.

## Requisitos
- Node.js instalado en tu sistema.
- MongoDB en funcionamiento.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/VentaOnline_Proyecto_Bimestral.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd VentaOnline_Proyecto_Bimestral
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto y agrega:
    ```bash
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/ventaonline
    JWT_SECRET=tu_secreto_jwt
    ```

## Uso
1. Inicia el servidor:
    ```bash
    npm start
    ```
2. La API estará disponible en: `http://localhost:3001/proyectoBimestral/v1`

## Ubicación de la Data
- La configuración y archivos relevantes se encuentran en la carpeta **configs**.
- También en esta carpeta encontrarás la colección de Postman para pruebas de API.

## Documentación de la API
La documentación de la API está disponible en `http://localhost:3001/proyectoBimestral/v1/api-docs` gracias a **Swagger**.

## Datos Iniciales
### Credenciales del Administrador por Defecto
Al ejecutar la API, se crea automáticamente un administrador con las siguientes credenciales:
- **Email**: `admin@example.com`
- **Contraseña**: `adminpassword`

### Categoría por Defecto
También se crea una categoría por defecto. Si una categoría es eliminada y estaba asignada a un producto, dicho producto se reasigna a esta categoría predeterminada.

## Endpoints

### Autenticación
- `POST /register`: Registrar un nuevo usuario.
- `POST /login`: Iniciar sesión.

### Gestión de Usuarios
- `GET /findUser/:uid`: Obtener usuario por ID.
- `GET /`: Obtener todos los usuarios.
- `DELETE /deleteUser/:uid`: Eliminar usuario por ID.
- `PUT /updatePassword/:uid`: Actualizar contraseña del usuario.
- `PUT /updateUser/:uid`: Actualizar datos del usuario.
- `PUT /cambiarRol/:uid`: Cambiar rol del usuario.

### Gestión de Productos
- `POST /crearProducto/`: Crear un nuevo producto.
- `PUT /editarProducto/:id`: Editar un producto existente.
- `DELETE /eliminarProducto/:id`: Eliminar un producto.
- `GET /obtenerProductos/`: Obtener todos los productos.
- `GET /masVendidos/`: Obtener los productos más vendidos.
- `GET /buscar?nombre=nombre_del_producto`: Buscar productos por nombre.
- `GET /categoria/:categoriaId`: Obtener productos por categoría.

### Gestión de Categorías
- `POST /crearCategoria/`: Crear una nueva categoría.
- `PUT /editarCategoria/:id`: Editar una categoría existente.
- `DELETE /eliminarCategoria/:id`: Eliminar una categoría.
- `GET /obtenerCategorias/`: Obtener todas las categorías.

### Carrito de Compras
- `POST /agregarCarrito/`: Agregar productos al carrito.
- `GET /verProductos/`: Ver productos en el carrito.
- `POST /completarCompra/:carritoId`: Completar la compra.

### Facturación
- `GET /historialFactura/`: Obtener historial de facturas.

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza los cambios y haz un commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Envía un pull request para revisión.

## Licencia
Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.

---

¡Gracias por usar VentaOnline! 🚀
