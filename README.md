<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


### Arquitectura de la aplicacion
  - Modular

## Description

Api de prueba tecnica softtek, el cual realiza un crud de empleados y consume el servicio de swapi.

Antes de comenzar, asegúrate de tener lo siguiente:
- Node.js versión 18 o superior instalado en tu sistema.
- NPM (Node Package Manager) instalado en tu sistema.

### Instalaciones y Ejecucion del Proyecto
Para instalar las dependencias del proyecto, sigue estos pasos:
1. Abre una terminal.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las bibliotecas necesarias:
    ```bash
    $ npm install
    ```
4. Configurar las variables de entorno en el archivo .env
   ```bash
    #local / dev / qa / prod
    STAGE=entorno_de_aplicacion
    APP_VERSION=version_de_aplicacion
    PORT=puerto_de_aplicacion
    DB_HOST=host_servidor_mysql
    DB_PORT=puerto_servidor_mysql
    DB_USER=usuario_servidor_mysql
    DB_PASSWORD=password_servidor_mysql
    DB_NAME=nombre_base_datos_mysql
    DB_SYNCHRONIZE=sincronizar_entidades_mysql
    API_URL_SWAPI=url_api_servicio_swapi
   ```
5. Iniciar el Proyecto en Desarrollo
 - Para ejecutar el proyecto en modo de desarrollo, sigue estos pasos:
    ```bash
    $ npm run dev
    ```
    
## Deploy en aws
 - Asegurate de tener configurado tu aws settings
 - Ejecutar cualquiera de los siguientes comandos
 - Para realizar el despliegue en lambda con serverless
    ```bash
    $ npm run sls:deploy
    ```

## Checklist 
- [x] Implementación de una API en Node.js utilizando el framework Serverless para su despliegue en AWS.
- [x] Adaptación y transformación de los modelos de la API de SWAPI a español
- [x] Diseño y creación de un modelo personalizado a través de endpoints para la insercion y lectura de la base de datos.
- [x] Uso de un framework (NestJs)

## Puntos
- [x] Mínimo 2 endpoints
- [x] Integración con Mysql
- [x] Integración con SWAPI
- [x] Traducción de atributos de inglés a español
- [x] Uso de Serverless Framework
- [x] Uso de Node.js
- [x] Respeto de las buenas prácticas de desarrollo

## Bonus
- [ ] Pruebas Unitarias
- [x] Uso de TypeScript
- [ ] Deploy sin errores
- [ ] Trabajar en capas y por dominio
