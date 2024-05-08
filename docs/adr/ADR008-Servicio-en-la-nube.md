# ADR 008: Servicios en la Nube
## Contexto y Planteamiento del Problema
* Tenemos la tarea de seleccionar un proveedor de servicios en la nube para implementar nuestro servicio, que consiste en una aplicación web que requiere alta disponibilidad, escalabilidad y seguridad.
## Opciones Consideradas
* AWS (Amazon Web Services)
* Azure (Microsoft Azure)
* GCP (Google Cloud Platform)
## Análisis de Opciones
* AWS 
  * Ventajas:
Amplia gama de servicios: AWS ofrece una gran variedad de servicios en la nube, desde cómputo hasta almacenamiento, bases de datos, inteligencia artificial y más.
Madurez y experiencia: AWS es el proveedor de servicios en la nube más antiguo y líder en el mercado, con una amplia experiencia y una gran cantidad de clientes satisfechos.
Flexibilidad y escalabilidad: AWS proporciona herramientas y servicios para escalar fácilmente la infraestructura según las necesidades del negocio.
Gran comunidad y soporte: AWS tiene una gran comunidad de usuarios y una amplia documentación que facilita la resolución de problemas y la obtención de ayuda cuando sea necesario.
  * Desventajas:
Curva de aprendizaje: La gran cantidad de servicios y la complejidad de algunos de ellos pueden hacer que la curva de aprendizaje sea pronunciada para los principiantes.
Costos ocultos: La flexibilidad de AWS puede llevar a costos inesperados si no se gestionan correctamente los recursos y se utilizan servicios adicionales.
* Azure
  * Ventajas:
Integración con tecnologías Microsoft: Azure ofrece una estrecha integración con tecnologías de Microsoft, lo que puede ser beneficioso para organizaciones que ya utilizan productos de Microsoft.
Amplia gama de servicios: Azure proporciona una amplia variedad de servicios en la nube, similar a AWS, incluyendo cómputo, almacenamiento, bases de datos, inteligencia artificial, etc.
Facilidad de uso con herramientas familiares: Para aquellos familiarizados con el ecosistema de Microsoft, Azure puede resultar más fácil de usar debido a su integración con herramientas y tecnologías familiares de Microsoft.
  * Desventajas:
Menos opciones de servicio: Aunque Azure ofrece una amplia gama de servicios, puede tener menos opciones en comparación con AWS en algunas áreas específicas.
Menor comunidad: Aunque la comunidad de Azure está creciendo, puede ser menos extensa que la de AWS en términos de recursos y documentación disponibles.
* GCP (Google Cloud Platform)
  * Ventajas:
Fortaleza en la inteligencia artificial y el aprendizaje automático: GCP se destaca en áreas como la inteligencia artificial y el aprendizaje automático, con herramientas avanzadas y modelos pre-entrenados.
Red global de alta velocidad: GCP ofrece una red global de alta velocidad que puede ser beneficiosa para aplicaciones que requieren baja latencia y alto rendimiento.
Facilidad de uso de Kubernetes: GCP es conocido por su sólido soporte para Kubernetes, lo que facilita la implementación y administración de contenedores en la nube.
  * Desventajas:
Menor variedad de servicios: Aunque GCP ofrece una variedad de servicios en la nube, puede tener menos opciones en comparación con AWS y Azure en algunas áreas.
Menor participación de mercado: GCP tiene una participación de mercado más pequeña en comparación con AWS y Azure, lo que puede llevar a una comunidad y recursos más limitados en algunos casos.
## Decisión
La opción elegida es AWS (Amazon Web Services). Aunque Azure y GCP también ofrecen una variedad de servicios en la nube y tienen sus propias ventajas, optamos por AWS debido a su amplia gama de servicios, su madurez y experiencia en el mercado, su gran comunidad y soporte, y su flexibilidad y escalabilidad. Estos factores hacen que AWS sea la opción más adecuada para implementar nuestro servicio en la nube, proporcionando la infraestructura necesaria para cumplir con los requisitos de nuestro proyecto de manera eficiente y confiable.
