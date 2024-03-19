# ADR 006: Integración Continua
## Contexto y Planteamiento del Problema
* El proyecto requiere implementar un sistema de integración continua (CI) para automatizar el proceso de construcción, prueba y despliegue de código.
## Opciones Consideradas
* GitHub Actions
* Jenkins
* GitLab CI/CD
## Análisis de Opciones
* GitHub Actions
  * Ventajas:
Integración directa con GitHub, lo que facilita su configuración y uso.
Ofrece una amplia gama de acciones predefinidas y personalizables para realizar diferentes tareas de CI/CD.
Soporta flujos de trabajo configurables en archivos YAML dentro del repositorio.
Puede aprovechar los eventos de GitHub para desencadenar acciones automáticamente.
  * Desventajas:
La capacidad de personalización puede ser limitada en comparación con sistemas más complejos como Jenkins.
Puede haber limitaciones en el tiempo de ejecución y recursos disponibles para las acciones.
* Jenkins
  * Ventajas:
Es altamente configurable y adaptable a diferentes casos de uso y entornos.
Amplia comunidad de usuarios y una gran cantidad de plugins disponibles para extender su funcionalidad.
Permite la integración con una variedad de herramientas y servicios.
Puede ejecutarse en diferentes sistemas operativos y entornos.
  * Desventajas:
Requiere una configuración inicial más compleja y mantenimiento continuo.
Puede ser menos integrado con plataformas de control de versiones como GitHub en comparación con otras opciones más modernas.
* GitLab CI/CD
  * Ventajas:
Totalmente integrado con GitLab y su ecosistema de desarrollo.
Proporciona un flujo de trabajo unificado para el desarrollo, CI/CD y gestión de proyectos.
Ofrece una interfaz intuitiva para configurar pipelines y jobs.
Soporta la definición de pipelines a través de archivos YAML en el repositorio.
  * Desventajas:
Limitado a proyectos alojados en GitLab, lo que puede ser una restricción si se utiliza otro proveedor de control de versiones.
## Decisión
La opción elegida es GitHub Actions. Aunque Jenkins y GitLab CI/CD son opciones sólidas con una gran cantidad de características y flexibilidad, decidimos utilizar GitHub Actions debido a su estrecha integración con nuestro flujo de trabajo actual en GitHub. GitHub Actions proporciona una solución fácil de configurar y mantener, permitiendo la automatización de nuestras pruebas, construcciones y despliegues directamente desde nuestro repositorio en GitHub. Además, su uso de archivos YAML para definir flujos de trabajo nos brinda una forma clara y legible de configurar nuestras pipelines.
