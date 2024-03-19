# ADR 007: Interfaz Gráfica para Administrar Kong
## Contexto y Planteamiento del Problema
* El proyecto requiere una interfaz gráfica para administrar y configurar Kong, el API Gateway utilizado en la aplicación.
## Opciones Consideradas
* Konga
* Kong Manager
## Análisis de Opciones
* Konga
  * Ventajas:
Interfaz de usuario intuitiva y fácil de usar.
Código abierto y comunidad activa.
Soporta una amplia gama de funcionalidades de administración de Kong.
Integración directa con Kong y otros componentes del ecosistema.
  * Desventajas:
Puede carecer de algunas características avanzadas presentes en Kong Manager.
Puede requerir una configuración adicional para integrarse completamente con Kong en entornos de producción.
* Kong Manager
  * Ventajas:
Proporciona una amplia gama de funcionalidades de administración para Kong.
Ofrece soporte oficial y posiblemente una mayor confiabilidad en comparación con soluciones de código abierto.
Puede incluir características avanzadas y capacidades de monitoreo y análisis.
  * Desventajas:
Puede tener un costo asociado, especialmente para implementaciones empresariales.
La integración con otros componentes puede ser más limitada en comparación con Konga.
## Decisión
La opción elegida es Konga. Aunque Kong Manager puede ofrecer una variedad de funcionalidades avanzadas y soporte oficial, optamos por Konga debido a su facilidad de uso y su naturaleza de código abierto. Konga proporciona una interfaz gráfica intuitiva que permitirá a nuestro equipo administrar y configurar Kong de manera eficiente. Además, al ser una solución de código abierto, podemos personalizar y extender Konga según nuestras necesidades específicas, lo que lo convierte en una opción más flexible y adaptable para nuestro proyecto.
