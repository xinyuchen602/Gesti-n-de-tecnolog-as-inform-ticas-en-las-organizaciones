# ADR 2: Utilización de Docker Compose para Despliegue Local

## Contexto y Planteamiento del Problema

* Es necesario seleccionar un sistema de gestión de base de datos para el almacenamiento de los datos del proyecto y interacción entre backend y frontend.

## Opciones Consideradas

* Opción 1: Utilizar Docker Compose para orquestar los contenedores necesarios y simplificar el proceso de despliegue local.
* Opción 2: Configurar manualmente cada componente del proyecto y gestionar las dependencias de forma independiente.


## Decisión

- Opción elegida: "Opción 1", porque Docker Compose proporciona una solución más simple y replicable para la gestión de múltiples contenedores durante el despliegue local. Usar docker compose nos ahorra tiempo en crear contenedores y en resolver las dependencias.
