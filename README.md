
# Proyecto API Systeshot

## Descripción

Este proyecto es una API RESTful para la gestión de clientes, empleados, usuarios, gastos, pedidos y productos en una aplicación empresarial. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estos recursos.

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
  - [Clientes](#clientes)
  - [Empleados](#empleados)
  - [Usuarios](#usuarios)
  - [Gastos](#gastos)
  - [Pedidos](#pedidos)
  - [Productos](#productos)
- [Autenticación](#autenticación)
- [Pruebas](#pruebas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Brick1223/Api-Systeshot.git
   cd Api-Systeshot
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=proyecto_database
   JWT_SECRET=your_jwt_secret
   ```

4. Inicia el servidor:
   ```sh
   npm start
   ```

## Uso

La API estará disponible en `http://localhost:3000`.

### Rutas de la API

#### Clientes

- **Obtener todos los clientes**
  - URL: `GET /api/clientes`
  - Respuesta: JSON con la lista de clientes.

- **Obtener un cliente por su ID**
  - URL: `GET /api/clientes/:id`
  - Respuesta: JSON con el cliente solicitado.

- **Crear un nuevo cliente**
  - URL: `POST /api/clientes`
  - JSON:
    ```json
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "telefono": "123456789",
      "correo_electronico": "juan.perez@example.com",
      "direccion": "Calle Falsa 123"
    }
    ```

- **Actualizar un cliente por su ID**
  - URL: `PUT /api/clientes/:id`
  - JSON:
    ```json
    {
      "nombre": "Nuevo nombre",
      "apellido": "Nuevo apellido",
      "telefono": "Nuevo teléfono",
      "correo_electronico": "nuevo.email@example.com",
      "direccion": "Nueva dirección"
    }
    ```

- **Eliminar un cliente por su ID**
  - URL: `DELETE /api/clientes/:id`
  - Respuesta: 204 No Content.

#### Empleados

- **Obtener todos los empleados**
  - URL: `GET /api/empleados`
  - Respuesta: JSON con la lista de empleados.

- **Obtener un empleado por su ID**
  - URL: `GET /api/empleados/:id`
  - Respuesta: JSON con el empleado solicitado.

- **Crear un nuevo empleado**
  - URL: `POST /api/empleados`
  - JSON:
    ```json
    {
      "nombre": "Carlos",
      "apellido": "González",
      "cargo": "Gerente",
      "fecha_contratacion": "2024-01-01"
    }
    ```

- **Actualizar un empleado por su ID
  - URL: `PUT /api/empleados/:id`
  - JSON:
    ```json
    {
      "nombre": "Nuevo nombre",
      "apellido": "Nuevo apellido",
      "cargo": "Nuevo cargo",
      "fecha_contratacion": "2024-06-01"
    }
    ```

- **Eliminar un empleado por su ID**
  - URL: `DELETE /api/empleados/:id`
  - Respuesta: 204 No Content.

#### Usuarios

- **Registrar un nuevo usuario**
  - URL: `POST /api/auth/register`
  - JSON:
    ```json
    {
      "username": "nuevo_usuario",
      "password": "contraseña_segura"
    }
    ```

- **Iniciar sesión**
  - URL: `POST /api/auth/login`
  - JSON:
    ```json
    {
      "username": "usuario_existente",
      "password": "contraseña_correcta"
    }
    ```

- **Obtener todos los usuarios**
  - URL: `GET /api/auth/users`
  - Respuesta: JSON con la lista de usuarios.

- **Obtener un usuario por su ID**
  - URL: `GET /api/auth/users/:id`
  - Respuesta: JSON con el usuario solicitado.

- **Actualizar un usuario por su ID**
  - URL: `PUT /api/auth/users/:id`
  - JSON:
    ```json
    {
      "username": "nuevo_username",
      "password": "nueva_contraseña"
    }
    ```

- **Eliminar un usuario por su ID**
  - URL: `DELETE /api/auth/users/:id`
  - Respuesta: 204 No Content.

#### Gastos

- **Obtener todos los gastos**
  - URL: `GET /api/gastos`
  - Respuesta: JSON con la lista de gastos.

- **Obtener un gasto por su ID**
  - URL: `GET /api/gastos/:id`
  - Respuesta: JSON con el gasto solicitado.

- **Crear un nuevo gasto**
  - URL: `POST /api/gastos`
  - JSON:
    ```json
    {
      "descripcion": "Compra de materiales",
      "monto": 150.75,
      "fecha": "2024-06-10"
    }
    ```

- **Actualizar un gasto por su ID**
  - URL: `PUT /api/gastos/:id`
  - JSON:
    ```json
    {
      "descripcion": "Compra de nuevos materiales",
      "monto": 200.00,
      "fecha": "2024-06-11"
    }
    ```

- **Eliminar un gasto por su ID**
  - URL: `DELETE /api/gastos/:id`
  - Respuesta: 204 No Content.

#### Pedidos

- **Obtener todos los pedidos**
  - URL: `GET /api/pedidos`
  - Respuesta: JSON con la lista de pedidos.

- **Obtener un pedido por su ID**
  - URL: `GET /api/pedidos/:id`
  - Respuesta: JSON con el pedido solicitado.

- **Crear un nuevo pedido**
  - URL: `POST /api/pedidos`
  - JSON:
    ```json
    {
      "cliente_id": 1,
      "fecha": "2024-06-10",
      "estado": "pendiente"
    }
    ```

- **Actualizar un pedido por su ID**
  - URL: `PUT /api/pedidos/:id`
  - JSON:
    ```json
    {
      "cliente_id": 2,
      "fecha": "2024-06-11",
      "estado": "completado"
    }
    ```

- **Eliminar un pedido por su ID**
  - URL: `DELETE /api/pedidos/:id`
  - Respuesta: 204 No Content.

#### Productos

- **Obtener todos los productos**
  - URL: `GET /api/productos`
  - Respuesta: JSON con la lista de productos.

- **Obtener un producto por su ID**
  - URL: `GET /api/productos/:id`
  - Respuesta: JSON con el producto solicitado.

- **Crear un nuevo producto**
  - URL: `POST /api/productos`
  - JSON:
    ```json
    {
      "nombre": "Producto de ejemplo",
      "descripcion": "Descripción del producto de ejemplo",
      "precio": 20.99,
      "stock": 100
    }
    ```

- **Actualizar un producto existente**
  - URL: `PUT /api/productos/:id`
  - JSON:
    ```json
    {
      "nombre": "Nuevo nombre del producto",
      "descripcion": "Nueva descripción del producto",
      "precio": 25.99,
      "stock": 150
    }
    ```

- **Eliminar un producto**
  - URL: `DELETE /api/productos/:id`
  - Respuesta: ...

### Autenticación

Las rutas para autenticación (`/api/auth/register` y `/api/auth/login`) permiten a los usuarios registrarse e iniciar sesión. El login genera un token JWT que se puede usar para acceder a rutas protegidas en el futuro.

### Pruebas

Puedes usar Postman o cualquier otra herramienta similar para realizar las pruebas de las diferentes rutas de la API. Asegúrate de configurar correctamente las solicitudes y enviar los JSON necesarios en el cuerpo de las mismas.

### Tecnologías Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Base de datos)
- bcryptjs (Para hashear contraseñas)
- jsonwebtoken (Para autenticación JWT)
- dotenv (Para manejo de variables de entorno)

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
```