# Gretta Back

Gretta Back es una API desarrollada en Node.js, Express, MongoDB, y JSON Web Token para llevar la contabilidad del café en la finca La Victoria.

## Instalación

Clona el repositorio o descárgalo en tu computadora.

- Abre una terminal y navega hasta la carpeta donde está el proyecto.
- Ejecuta `npm install` para instalar las dependencias.
- Configura las variables de entorno en un archivo `.env` en la raíz del proyecto.
- A continuación se muestra un ejemplo de las variables de entorno necesarias:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gretta-back
JWT_SECRET=secret
```

- Ejecuta npm start para iniciar el servidor.

## Uso

La API proporciona varias rutas para manejar la contabilidad del café en la finca La Victoria. A continuación se muestra una lista de las rutas disponibles:

### Rutas públicas

- `POST /users/signup`: crea un nuevo usuario. Los siguientes campos son necesarios: `nombre`, `correo`, y password.
- `POST /users/login`: inicia sesión con un usuario existente. Los siguientes campos son necesarios: email y password.
- `GET /varieties`: obtiene una lista de las variedades de café en la finca.

### Rutas públicas

Estas rutas requieren un token de autenticación generado al iniciar sesión. Debe incluir el token en la cabecera `Authorization` de cada solicitud.

- `GET /harvests`: obtiene una lista de las cosechas de café en la finca.
- `POST /harvests`: crea una nueva cosecha de café. Los siguientes campos son necesarios: `variety`, `harvest_date`, `weight`, y `price`.
- `PUT /harvests/:id`: actualiza una cosecha de café existente. Se debe proporcionar el ID de la cosecha en la URL y los siguientes campos en el cuerpo de la solicitud: variety, harvest_date, weight, y price.
- `DELETE /harvests/:id`: elimina una cosecha de café existente. Se debe proporcionar el ID de la cosecha en la URL.

## License

Este proyecto está bajo la Licencia [MIT](https://choosealicense.com/licenses/mit/)
