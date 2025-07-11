# Backend REST API con Node.js y MongoDB

## Descripción

Este proyecto es un backend para la gestión de usuarios, clientes y artículos. Está construido con Node.js, Express y MongoDB. Provee endpoints REST para crear, leer, actualizar y eliminar datos (CRUD).

---

## Tecnologías

- Node.js
- Express
- MongoDB con Mongoose
- dotenv para variables de entorno
- Axios  


---

## Variables de Entorno (.env)
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombreBD  
PORT=8080

## Uso
npm start  

## Endpoints REST

### Usuarios
- GET /api/usuarios → Obtener todos los usuarios
- GET /api/usuarios/:id → Obtener un usuario por ID
- POST /api/usuarios → Crear un nuevo usuario
- PUT /api/usuarios/:id → Actualizar un usuario
- DELETE /api/usuarios/:id → Eliminar un usuario

### Clientes
- GET /api/clientes → Obtener todos los clientes
- GET /api/clientes/:id → Obtener un cliente por ID
- POST /api/clientes → Crear un nuevo cliente
- PUT /api/clientes/:id → Actualizar un cliente
- DELETE /api/clientes/:id → Eliminar un cliente

### Artículos
- GET /api/articulos → Obtener todos los artículos
- GET /api/articulos/:id → Obtener un artículo por ID
- POST /api/articulos → Crear un nuevo artículo
- PUT /api/articulos/:id → Actualizar un artículo
- DELETE /api/articulos/:id → Eliminar un artículo
