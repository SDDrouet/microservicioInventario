﻿# Microservicio Inventario

## Instalación y Ejecución

Este proyecto utiliza Docker Compose para facilitar la instalación y ejecución. Sigue estos pasos:

1. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

2. Clona el repositorio del proyecto:
   ```
   git clone https://github.com/SDDrouet/microservicioInventario
   cd microservicioInventario
   ```

3. En la raíz del proyecto, donde se encuentra el archivo `docker-compose.yml`, ejecuta:
   ```
   docker-compose up --build -d
   ```

   Esto construirá las imágenes de los servicios (si es necesario) y luego iniciará los contenedores en modo detached.

4. Para verificar que los servicios están corriendo, puedes usar:
   ```
   docker-compose ps
   ```

5. Para detener los servicios, ejecuta:
   ```
   docker-compose down
   ```

Ahora deberías poder acceder al endpoint del microservicio como se describe a continuación

## Endpoint

1. Microservicio de Inventario:
   `http://localhost:3001/api/inventario`

## Operaciones CRUD

Para el microservicio, puedes realizar las siguientes operaciones:

### GET (Leer)

- Obtener todos los registros:
  ```
  GET http://localhost:3001/api/inventario
  ```
- Obtener un registro específico:
  ```
  GET http://localhost:3001/api/inventario/ID
  ```

### POST (Crear)

- Crear un nuevo registro:
  ```
  POST http://localhost:3001/api/inventario
  Content-Type: application/json

  {
   "nombre": "Producto b",
   "descripcion": "Este es un producto de prueba",
   "stock": 700,
   "precio": 99.99
   }
  ```

### PUT (Actualizar)

- Actualizar un registro existente:
  ```
  PUT http://localhost:3001/api/inventario/ID
  Content-Type: application/json

  {
   "nombre": "Producto b",
   "descripcion": "Este es un producto de prueba",
   "stock": 700,
   "precio": 99.99
   }
  ```

### DELETE (Eliminar)

- Eliminar un registro:
  ```
  DELETE http://localhost:300X/api/inventario/ID
  ```

## Notas adicionales

- Asegúrate de que el puerto 3001 esté disponible en tu sistema.
- Si necesitas realizar cambios en la configuración, puedes editar el archivo `docker-compose.yml`.
- Para ver los logs de los servicios, puedes usar `docker-compose logs -f`.

