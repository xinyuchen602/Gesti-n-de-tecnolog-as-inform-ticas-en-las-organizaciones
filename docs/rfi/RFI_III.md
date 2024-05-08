# RFI III
## Integración continua 
Estamos utilizando GitHub Actions, que es un servicio de integración continua y entrega continua (CI/CD) proporcionado por GitHub. Permite automatizar flujos de trabajo personalizados directamente en tu repositorio de GitHub. Puedes utilizar Actions para ejecutar tareas específicas en respuesta a eventos específicos, como confirmaciones de código, aperturas de solicitudes de extracción, etiquetado de versiones, entre otros.
Por ahora solo tenemos implementada una sola tarea de GitHub Actions, pero hemos investigado hacerca de algunas funcionalidades que a futuro nos vendrian bien

1. **Triggers (Disparadores):**
        Los triggers en GitHub Actions son eventos que desencadenan la ejecución de un flujo de trabajo. Estos eventos pueden ser acciones como push (empujar) de código al repositorio, creación de solicitudes de extracción (pull requests), creación o modificación de etiquetas, entre otros. Los triggers permiten que los flujos de trabajo se activen automáticamente en respuesta a acciones específicas en el repositorio.

2. **Tareas Definidas:**
        En GitHub Actions, las tareas se definen dentro de un archivo YAML que describe el flujo de trabajo. Estas tareas representan las diferentes acciones que se deben realizar durante el proceso de integración continua y entrega continua. Las tareas pueden incluir acciones como clonar el repositorio, compilar el código, ejecutar pruebas, construir artefactos, entre otros.

3. **Compilación de Código:**
        La compilación de código es una tarea común en el proceso de integración continua. Consiste en transformar el código fuente en un formato ejecutable o en un artefacto que pueda ser desplegado. En el contexto de GitHub Actions, la compilación de código puede realizarse utilizando herramientas como compiladores, constructores de paquetes, o herramientas de automatización de compilación específicas para el lenguaje de programación utilizado en el proyecto.

4. **Pruebas Automatizadas:**
        Las pruebas automatizadas son otra tarea fundamental en el proceso de integración continua. Consisten en ejecutar una serie de pruebas automatizadas, como pruebas unitarias, pruebas de integración o pruebas de aceptación, para validar que el código funcione como se espera. En GitHub Actions, puedes configurar flujos de trabajo para ejecutar estas pruebas automáticamente en cada confirmación de código o solicitud de extracción.

5. **Notificaciones:**
        Las notificaciones son importantes para mantener informados a los colaboradores del proyecto sobre el estado de los flujos de trabajo en GitHub Actions. Puedes configurar acciones específicas para enviar notificaciones por correo electrónico, mensajes de texto, mensajes en Slack u otros canales de comunicación, informando sobre el éxito o fracaso de las ejecuciones de los flujos de trabajo, así como proporcionando detalles sobre los errores encontrados.

6. **Pipelines:**
        Los pipelines en GitHub Actions son conjuntos de flujos de trabajo que se ejecutan secuencialmente o en paralelo para automatizar todo el proceso de integración continua y entrega continua. Un pipeline puede incluir varias etapas, como compilación, pruebas, construcción de artefactos, despliegue, entre otros. Los pipelines permiten definir y organizar de manera estructurada y coherente todo el proceso de desarrollo y despliegue de software.
## Arquitectura AWS  
1. **Tres Clústeres**  
        Se han creado tres clústeres en AWS: "web", "kong" y "konga". Cada clúster es un grupo lógico de instancias EC2 o servicios Fargate donde se ejecutan los contenedores Docker. Estos clústeres están diseñados para alojar diferentes partes de la aplicación o servicios que necesitan ser administrados y escalados independientemente.

2. **Balanceador de Carga Único**  
        Hay un único balanceador de carga configurado para dirigir el tráfico entrante a los servicios que se ejecutan en los tres clústeres. Este balanceador de carga distribuye de manera equitativa las solicitudes de los usuarios entre las instancias o contenedores disponibles en los clústeres, lo que garantiza la escalabilidad, la alta disponibilidad y el rendimiento de la aplicación.

3. **Tres Servicios de Contenedor:**  
        Se han implementado tres servicios de contenedor distintos: "web", "kong" y "konga". Cada uno de estos servicios representa una parte específica de la aplicación o infraestructura. Por ejemplo, el servicio "web" podría alojar la interfaz de usuario de la aplicación, mientras que los servicios "kong" y "konga" podrían ser servicios de gestión de API o puertas de enlace.

4. **Base de Datos RDS PostgreSQL 11**  
        Se utiliza una instancia de base de datos RDS (Relational Database Service) con PostgreSQL 11 como motor de base de datos. Esta base de datos se utiliza para almacenar datos estructurados necesarios para el funcionamiento de la aplicación, como información de usuarios, configuraciones y registros. RDS proporciona una solución completamente administrada para la base de datos, incluyendo copias de seguridad automatizadas, escalabilidad y mantenimiento de parches.

5. **Amazon ECR (Elastic Container Registry)**   
        Amazon ECR se utiliza como un repositorio para almacenar imágenes de contenedor Docker. Las imágenes de contenedor utilizadas por los servicios de contenedor (web, kong y konga) se almacenan en ECR. Esto proporciona un lugar centralizado y seguro para gestionar y distribuir las imágenes de contenedor utilizadas en la aplicación.
## Servicios AWS  
1. **Elastic Container Service (ECS)**  
        ECS es un servicio de administración de contenedores completamente administrado por AWS. Permite ejecutar, detener y administrar fácilmente contenedores Docker en un entorno escalable. Con ECS, puedes crear clústeres de contenedores para agrupar y administrar múltiples contenedores en una sola instancia EC2 o a través de servicios completamente administrados como Fargate. ECS facilita la implementación de aplicaciones contenerizadas al encargarse de tareas como la programación, la escalabilidad y la administración de la infraestructura subyacente.

2. **Task Definitions**  
        Las definiciones de tareas en ECS especifican cómo se ejecutarán los contenedores en un clúster de ECS. Cada definición de tarea describe los parámetros necesarios para ejecutar una o más instancias de un contenedor, incluyendo la imagen Docker que se utilizará, la cantidad de CPU y memoria asignada, variables de entorno, puertos expuestos y configuración de red. Las definiciones de tareas son la base sobre la cual ECS programa y ejecuta los contenedores en el clúster, permitiendo una configuración precisa y detallada de cómo se ejecutará cada componente de la aplicación.

3. **EC2 instances**  
        Las instancias EC2 son máquinas virtuales escalables y configurables que proporciona AWS. En el contexto de ECS, estas instancias pueden ser utilizadas como nodos de computación en un clúster de contenedores ECS. Cada instancia EC2 en el clúster ejecuta el agente ECS, que se comunica con el servicio ECS para recibir tareas y ejecutar contenedores según lo especificado en las definiciones de tareas. Las instancias EC2 proporcionan la capacidad de cómputo y el entorno de ejecución para los contenedores Docker en el clúster de ECS.

4. **Application Load Balancer (ALB)**    
        El Application Load Balancer de AWS es un balanceador de carga capaz de dirigir el tráfico HTTP y HTTPS a instancias EC2, contenedores de ECS o cualquier otro destino registrado en AWS. En el contexto de ECS, se puede usar un ALB para distribuir el tráfico de red entre las instancias del clúster que ejecutan contenedores. Esto proporciona escalabilidad, alta disponibilidad y rendimiento para las aplicaciones alojadas en el clúster de ECS al distribuir de manera inteligente las solicitudes de los usuarios entre múltiples instancias.

5. **CloudWatch**  
        CloudWatch es el servicio de monitoreo y observabilidad de AWS que permite recopilar y rastrear métricas, supervisar logs y crear alarmas para recursos en la nube de AWS. En el contexto de ECS, CloudWatch se utiliza para el registro y análisis de logs generados por los contenedores y las instancias EC2 en el clúster de ECS. Esto proporciona visibilidad sobre el rendimiento, la salud y el comportamiento de las aplicaciones y la infraestructura, lo que facilita la detección y solución de problemas, la optimización del rendimiento y el cumplimiento de requisitos de auditoría y seguridad.

## Plan de despliegue  
### Manual
1. **Configuración de la Infraestructura:**
    Inicia sesión en la consola de AWS.
    Navega a los servicios relevantes.
    Configura manualmente los recursos necesarios, como instancias, grupos de autoescalado, balanceadores de carga, etc.

2. **Configuración de la Aplicación:**
    Implementa tu aplicación en las instancias o contenedores configurados en el paso anterior.
    Configura manualmente cualquier detalle adicional, como variables de entorno, configuración de red, etc.
   
### Automático
Para el plan de despliegue automático se va a hacer uso de Terraform, aún esta en fase de desarrollo, pero la idea es la siguiente:  
1. **Inicialización de Terraform:**  
      Inicia un nuevo proyecto de Terraform en tu máquina local.  
      Ejecuta terraform init para inicializar el proyecto y descargar los proveedores de AWS.  

2. **Planificación y Aplicación:**  
      Utiliza terraform plan para generar un plan de ejecución. Esto mostrará los cambios que Terraform planea realizar en tu infraestructura.  
      Revisa cuidadosamente el plan para asegurarte de que los recursos se están creando/modificando/eliminando según lo esperado.  
      Si estás satisfecho con el plan, ejecuta terraform apply para aplicar los cambios y desplegar la infraestructura en AWS.  

3. **Configuración de la Aplicación:**  
      Implementa la aplicación en los recursos de infraestructura creados por Terraform.  
      Automatizar este paso utilizando herramientas de automatización de la configuración como Ansible, Chef o Puppet junto con Terraform.  

## Escalabilidad  

La solución propuesta aprovecha varias tecnologías clave para garantizar una arquitectura flexible y adaptable a las demandas del sistema. Estas son varias de las razones:
1. **Elastic Container Service (ECS):** ECS proporciona un entorno altamente escalable para ejecutar contenedores Docker. Permite la gestión de contenedores a gran escala sin tener que preocuparse por la infraestructura subyacente. Su capacidad para escalar automáticamente según la carga del sistema garantiza que siempre haya suficientes recursos disponibles para manejar las solicitudes entrantes.
2. **Auto Scaling Group (Grupo de Escalado Automático):** Esta funcionalidad de AWS permite definir reglas para escalar automáticamente el número de instancias de contenedores en función de métricas como la CPU, la memoria o el tráfico de red. Esto asegura que el sistema pueda adaptarse dinámicamente a picos de carga repentinos o disminuciones en la demanda, optimizando así los costos al utilizar solo los recursos necesarios en cualquier momento.
3. **Application Load Balancer (ALB):** El ALB actúa como un punto de entrada para las solicitudes de los usuarios y distribuye el tráfico de manera inteligente entre las instancias de contenedores disponibles en el clúster ECS. Esta distribución equitativa garantiza una alta disponibilidad y rendimiento del sistema al dirigir las solicitudes de manera eficiente a las instancias que tienen capacidad para manejarlas.
4. **Definición de Tareas (Tasks Definition):** Esta característica de ECS simplifica la configuración de los detalles específicos de cada tarea o servicio que se ejecuta en el clúster de contenedores. Permite especificar fácilmente la imagen del contenedor a utilizar, los recursos asignados (CPU y memoria), variables de entorno necesarias y la configuración de red, entre otros aspectos. Esto facilita la configuración y el despliegue de nuevas aplicaciones o servicios dentro del entorno de contenedores.
