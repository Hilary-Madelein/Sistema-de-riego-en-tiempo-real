# Sistema de Riego en Tiempo Real

Este proyecto muestra un sistema interactivo para monitorear y visualizar en tiempo real parámetros ambientales relacionados con el riego, como:
- Humedad del suelo
- Temperatura
- Humedad relativa
- Nivel de agua
- pH del agua

El sistema está desarrollado utilizando React y está preparado para ejecutarse tanto en entornos de desarrollo como de producción mediante Docker.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm start`

Ejecuta la aplicación en modo desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para verla en acción. La página se recargará automáticamente al realizar cambios en el código.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`. Los archivos están optimizados para el mejor rendimiento y listos para ser desplegados en cualquier servidor.

---

## Uso de Docker

Este proyecto incluye un `Dockerfile` para facilitar la creación de una imagen Docker y su ejecución en contenedores.

### Crear y Ejecutar la Imagen Docker

1. **Construir la imagen Docker:**
   ```bash
   docker build -t sistema-riego:latest .
   ```

2. **Ejecutar el contenedor Docker:**
   ```bash
   docker run -p 3000:3000 --name sistema-riego-container sistema-riego:latest
   ```

3. **Acceder a la aplicación:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Comandos Adicionales

- **Ver contenedores en ejecución:**
  ```bash
  docker ps
  ```

- **Detener el contenedor:**
  ```bash
  docker stop sistema-riego-container
  ```

- **Eliminar el contenedor:**
  ```bash
  docker rm sistema-riego-container
  ```

---

## Aprender Más

Para más información sobre las tecnologías utilizadas:
- [Documentación de React](https://reactjs.org/)
- [Docker Documentation](https://docs.docker.com/)