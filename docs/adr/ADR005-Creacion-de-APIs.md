# ADR 5: Creación de APIs
## Contexto y Planteamiento del Problema
* El proyecto requiere el desarrollo de APIs para proporcionar acceso a los datos y funcionalidades a través de servicios web. Se deben evaluar diferentes opciones para determinar la tecnología más adecuada para implementar estas APIs.

## Opciones Consideradas
* Utilizar Next.js para construir las APIs.
* Utilizar Express.js para construir las APIs.
* Utilizar Flask para construir las APIs.
## Análisis de Opciones
* Next.js
Ventajas:
Next.js es un framework de React que permite construir APIs fácilmente gracias a su API routing y SSR (Server-Side Rendering).
Integración directa con el proyecto de frontend si ya se está utilizando Next.js para el frontend.
Soporte para TypeScript de forma nativa.
Manejo sencillo de rutas y middleware.
Desventajas:
Menos flexibilidad en comparación con Express.js o Flask en algunos casos específicos.
No es tan ampliamente utilizado para construir APIs como Express.js.
* Express.js
Ventajas:

Ampliamente utilizado y probado en la industria.
Gran cantidad de middleware disponible para ampliar funcionalidades.
Flexibilidad para crear cualquier tipo de API, desde RESTful hasta GraphQL.
Comunidad activa y gran cantidad de recursos disponibles.
Desventajas:

Requiere más configuración inicial en comparación con Next.js.
No ofrece Server-Side Rendering de forma nativa, aunque se puede integrar con otros frameworks para lograrlo.
* Flask
Ventajas:
Ligero y fácil de aprender.
Buena integración con librerías de Python para manipulación de datos y otras tareas.
Framework muy flexible que permite crear APIs RESTful de manera rápida y eficiente.
Desventajas:
Menos popular en el ecosistema Node.js y JavaScript.
No es tan comúnmente utilizado en proyectos de este tipo, por lo que podría haber menos recursos y ejemplos disponibles en comparación con Express.js o Next.js.
## Decisión
La opción elegida es Next.js. Aunque Express.js y Flask son opciones sólidas y bien establecidas para la construcción de APIs, decidimos utilizar Next.js debido a su integración natural con nuestro proyecto existente de Node.js y React. Next.js nos brinda la flexibilidad necesaria para construir APIs eficientes y escalables, aprovechando su capacidad de Server-Side Rendering y su enfoque centrado en React. Además, el soporte nativo para TypeScript en Next.js se alinea bien con nuestra preferencia por utilizar TypeScript en nuestro proyecto.