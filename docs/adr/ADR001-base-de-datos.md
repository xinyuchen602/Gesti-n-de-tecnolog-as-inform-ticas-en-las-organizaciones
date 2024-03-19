# ADR 1: Elección de PostgreSQL como Sistema de Gestión de Base de Datos

## Contexto y Planteamiento del Problema

* Es necesario seleccionar un sistema de gestión de base de datos para el almacenamiento de los datos del proyecto y interacción entre backend y frontend.

## Opciones Consideradas

* Opción 1: Utilizar PostgreSQL 
* Opción 2: Utilizar PhpMyAdmin


## Decisión

- Opción elegida: "Opción 1", porque PostgreSQL es muy facil de usar en docker, podemos crear una imagen especificando en el fichero compose.yaml y tambien porque tenemos experiencia de usar ese sistema de gestión de bases de datos relacional.

## Nuevo contexto
* Se ha visto que el uso de mongoDB al ser una Base de datos no relacional nos ayudaba en el proceso de almacenaje de datos por lo que se ha decido cambiar de tipo de base de datos de PostgreSQL a MongoDB para los datos del servicio web.
