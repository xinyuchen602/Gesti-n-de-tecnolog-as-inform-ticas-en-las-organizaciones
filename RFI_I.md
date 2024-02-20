# RFI I
## ¿Cómo es la organización de un equipo de desarrollo, mantenimiento y operaciones del proyecto votación? - Igor
La empresa esta organizada en distintos categorías, por una parte estan los participantes del equipo de un equipo de desarrollo, formado por los siguientes tres roles:

**Product Owner:** 
- Es el responsable de representar los intereses del cliente y del usuario final. Define y prioriza los elementos del backlog del producto, asegurando que el equipo esté construyendo las características más valiosas y relevantes para el sistema de votación.  

**Scrum Master:** 
- Es el facilitador del equipo Scrum. Se asegura de que el equipo comprenda y siga los principios y prácticas de Scrum. Ayuda a resolver los obstáculos que puedan surgir durante el desarrollo y promueve un ambiente de colaboración y mejora continua.  

**Desarrollor:**  
- Los encargados de desarrollar las funcionalidades del sistema de votación de acuerdo con las prioridades del backlog del producto.

Dejando a un lado el equipo de desarrollo la empresa cuenta también con otros dos equipos para complementar el trabajo del equipo de desarrollo:

**Equipo de Mantenimiento:**  
- **Ingenieros de Software:** Responsables de mantener y mejorar continuamente el sistema de votación, implementando nuevas características y correcciones de errores según lo priorizado por el Product Owner.  
- **Control de Calidad:** Realizan pruebas de calidad en las nuevas funcionalidades y en las actualizaciones del sistema para garantizar que cumplan con los estándares de calidad definidos.  

**Equipo de Operaciones:**
- **Administradores de Sistemas:** Se encargan de implementar y mantener la infraestructura necesaria para el sistema de votación.  
- **Administradores de Bases de Datos:** Gestionan y mantienen las bases de datos utilizadas por el sistema de votación.  
- **Desplegadores:** Responsables de implementar nuevas versiones del sistema de votación en los entornos de producción y de preproducción.
   
## ¿Quiénes son los miembros del equipo y cuáles son sus roles? - Igor
El equipo esta conformado por tres miembros:
- Xinyu Chen, quien desempeña el rol de Product Owner. Su función principal es actuar como intermediario entre nuestro equipo y el cliente, abordando las incertidumbres del equipo y supervisando el proceso para garantizar que el producto desarrollado cumpla con los requisitos establecidos.
- Igor Irigoyen, quien asume el rol de Scrum Master. Su responsabilidad es facilitar y guiar el equipo en la implementación eficaz de la metodología Scrum, eliminando obstáculos, fomentando la colaboración y asegurando que se sigan los principios y prácticas de Scrum para lograr los objetivos del proyecto de manera óptima.
- Iker Urdaniz, quien desempeña el papel de desarrollador dentro del equipo. Se encarga principalmente de la escritura de código, el diseño y la creación de soluciones. Su labor consiste en transformar los requisitos del cliente en un producto de calidad, aplicando su experiencia y habilidades técnicas para garantizar un resultado óptimo.

## ¿Cuáles son las herramientas de gestión del proyecto? - Xinyu
Aunque GitHub es más conocido como una plataforma de control de versiones, también ofrece funciones para la gestión del proyecto. En este caso hemos usado una de sus funcionalidades "issues", en allí hemos enumerado los distintos problemas que encontramos a la hora de avanzar el proyecto y ver entre todos para solucionar los problemas.

## ¿Cuáles son las herramientas de gestión de la configuración del proyecto? - Xinyu
Para este proyecto hemos usado GitHub que es una herramienta muy adecuada para la gestión de la configuración del proyecto. Permite controlar versiones del código, gestionar ramificaciones (crear diferentes branches), fusionar cambios (haciendo merge solo o utilizando pull requests), y mantener un historial de todos los cambios realizados en el proyecto.
![image](https://github.com/xinyuchen602/Gestion-de-tecnologias-informaticas-en-las-organizaciones/assets/83186292/370da9a9-0a59-4ae9-b6db-814813035486)

![image](https://github.com/xinyuchen602/Gestion-de-tecnologias-informaticas-en-las-organizaciones/assets/83186292/3fbba2ae-0a5d-48b3-858e-16dd58e887d1)

## ¿Cómo se despliega el sistema en un entorno de test local? Se requiere un acercamiento inicial a la arquitectura del sistema, aunque se profundizará en el RFI II. - Iker
Para desplegar el sistema en un entorno de prueba local, utilizaremos Docker Compose, una herramienta que facilita la gestión de aplicaciones multi-contenedor.

Para ello, proporcionamos un archivo de configuración docker-compose.yml, que define y configura los servicios necesarios para el despliegue: talto el servidor web y la base de datos, como los puertos a través de los cuales se accederá a la aplicación. Además, se emplea un archivo Dockerfile, que contiene las instrucciones para la construcción de la imagen del servidor web.

La aplicación se puede ejecutar mediante un comando específico (`docker compose up`) que inicia el despliegue del sistema en su entorno local. Este proceso se lleva a cabo de manera automatizada y garantiza la consistencia del entorno de prueba con el sistema en producción.

Este método permite una configuración rápida, consistente y eficiente de todos los entornos.

![imagen](https://github.com/ikerurda/Gestion-de-tecnologias-informaticas-en-las-organizaciones/assets/45340417/dc9bb1a5-7c7f-4548-a3be-40d4355f8f27)
