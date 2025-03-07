# VentaOnline_Proyecto_Bimestral

##  Descripción
Este proyecto es una aplicación web para la gestión de ventas online. Permite a los administradores gestionar productos, categorías y usuarios con diferentes roles, utilizando **Node.js, Express y MongoDB**.

## Requisitos

- Node.js
- MongoDB

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

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

    ```env
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/ventaonline
    JWT_SECRET=tu_secreto_jwt
    ```

## Uso

1. Inicia el servidor:

    ```bash
    npm start
    ```

2. La API estará disponible en `http://localhost:3001/proyectoBimestral/v1`.

## Documentación de la API

La documentación de la API está disponible en `http://localhost:3001/proyectoBimestral/v1/api-docs` gracias a Swagger.

## Endpoints

### Auth

- `POST /register`: Registrar un nuevo usuario.
- `POST /login`: Iniciar sesión.

### Usuario

- `GET /findUser/:uid`: Obtener usuario por ID.
- `GET /`: Obtener todos los usuarios.
- `DELETE /deleteUser/:uid`: Eliminar usuario por ID.
- `PUT /updatePassword/:uid`: Actualizar contraseña del usuario.
- `PUT /updateUser/:uid`: Actualizar datos del usuario.
- `PUT /cambiarRol/:uid`: Cambiar rol del usuario.

### Producto

- `POST /crearProducto/`: Crear un nuevo producto.
- `PUT /editarProducto/:id`: Editar un producto existente.
- `DELETE /eliminarProducto/:id`: Eliminar un producto.
- `GET /obtenerProductos/`: Obtener todos los productos.
- `GET /masVendidos/`: Obtener los productos más vendidos.
- `GET /buscar?nombre=nombre_del_producto`: Buscar productos por nombre.
- `GET /categoria/:categoriaId`: Obtener productos por categoría.

### Categoría

- `POST /crearCategoria/`: Crear una nueva categoría.
- `PUT /editarCategoria/:id`: Editar una categoría existente.
- `DELETE /eliminarCategoria/:id`: Eliminar una categoría.
- `GET /obtenerCategorias/`: Obtener todas las categorías.

### Carrito

- `POST /agregarCarrito/`: Agregar productos al carrito.
- `GET /verProductos/`: Ver productos en el carrito.
- `POST /completarCompra/:carritoId`: Completar la compra.

### Factura

- `GET /historialFactura/`: Obtener historial de facturas.



