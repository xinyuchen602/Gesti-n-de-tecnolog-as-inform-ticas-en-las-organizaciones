# ADR 008: Infraestructura como código
## Contexto y Planteamiento del Problema
* Tenemos la tarea de seleccionar un proveedor de servicios en la nube para implementar nuestro servicio, que consiste en una aplicación web que requiere alta disponibilidad, escalabilidad y seguridad.
## Opciones Consideradas
* Terraform
* CloudFormation
* Ansible
## Análisis de Opciones
* Terraform 
  * Ventajas:  
  **Multiplataforma:** Terraform es compatible con una variedad de proveedores de nube, lo que permite gestionar infraestructuras heterogéneas.  
  **Infraestructura como código (IaC):** Permite definir la infraestructura como código, lo que facilita la automatización, la gestión y la replicabilidad.  
  **Gestión de estado:** Terraform mantiene un estado de la infraestructura, lo que permite realizar cambios incrementales y planificar despliegues de manera segura.  
  **Modularidad:** Los módulos de Terraform permiten organizar y reutilizar código, facilitando la escalabilidad y el mantenimiento.  
  * Desventajas:  
  **Curva de aprendizaje inicial:** Puede requerir tiempo para familiarizarse con la sintaxis y los conceptos de Terraform.  
  **Mayor complejidad para configuraciones avanzadas:** Algunas configuraciones avanzadas pueden requerir un mayor nivel de complejidad en la escritura de código.  
* CloudFormation
  * Ventajas:  
  **Simple de aprender:** Ansible utiliza YAML para la descripción de tareas, lo que lo hace fácil de leer y escribir para los usuarios.  
  **Agenteless:** No requiere agentes en los servidores de destino, lo que facilita la implementación y la gestión.  
  **Amplia gama de casos de uso:** Ansible puede ser utilizado para la gestión de configuraciones, implementaciones de aplicaciones, orquestación de servicios, entre otros.  
  **Gestión de configuración en tiempo real:** Ansible permite aplicar cambios en tiempo real, lo que facilita la respuesta rápida a las necesidades de infraestructura.  
  * Desventajas:  
  **Limitaciones en la gestión de estado:** Ansible no mantiene un estado de la infraestructura como Terraform, lo que puede hacer más difícil rastrear y gestionar cambios.    
  **Menos adecuado para infraestructuras complejas:** Para infraestructuras muy complejas, Ansible puede volverse menos escalable y más difícil de mantener.    
* Ansible
  * Ventajas:  
**Fortaleza en la inteligencia artificial y el aprendizaje automático:** GCP se destaca en áreas como la inteligencia artificial y el aprendizaje automático, con herramientas avanzadas y modelos pre-entrenados.  
**Red global de alta velocidad:** GCP ofrece una red global de alta velocidad que puede ser beneficiosa para aplicaciones que requieren baja latencia y alto rendimiento.  
**Facilidad de uso de Kubernetes:** GCP es conocido por su sólido soporte para Kubernetes, lo que facilita la implementación y administración de contenedores en la nube.  
  * Desventajas:  
**Menor variedad de servicios:** Aunque GCP ofrece una variedad de servicios en la nube, puede tener menos opciones en comparación con AWS y Azure en algunas áreas.  
**Menor participación de mercado:** GCP tiene una participación de mercado más pequeña en comparación con AWS y Azure, lo que puede llevar a una comunidad y recursos más limitados en algunos casos.  
## Decisión
La opción elegida es Terraform. Aunque a también CloudFormation ofrece una facil implementación con AWS, las ventajas de usar terraform debido a ser multiplataforma y su escalabilidad nos decantamos por el.
