# RFI II
## Buenas prácticas
Para que el desarrollo del proyecto se pueda llevar a cabo de la mejor forma posible se han tomado distintas medidas:
1. Uso de Pull Request, gracias a esto se consigue que todo cambio sea supervisado por al menos otro intregante más y como somos solo dos integrantes, en nuestro caso todo el mundo es conocedor del código subido.
2. Uso de Issues, en este caso hemos usado una de sus funcionalidades "issues" que nos ofrece GitHub, en allí hemos enumerado los distintos problemas que encontramos a la hora de avanzar el proyecto y ver entre todos para solucionar los problemas. 
3. Reuniones semanales, con las reuniones semanales presenciales conseguimos plantear problemas que hemos tenido durante la semana de forma directa y resolverlos también más eficazmente.
4. Documentación técnica, gracias a documentar las tecnologías utilizadas en el servicio y como interactuan entre ellas podemos consultar en cualquier momento y evitar perdidas de tiempo en entender el código desarrollado en el pasado o de otra persona. Además, con la documentación se aclara el funcionamiento y como ejecutar el el servicio.

## Arquitectura  

**Contenedores:** Los contenedores son la unidad de implementación de Docker. Contienen todo lo necesario para ejecutar una aplicación, incluidas las bibliotecas, las dependencias y el código. Cada contenedor se ejecuta de manera aislada y comparte los recursos del sistema operativo subyacente con otros contenedores en la misma máquina. 
1. Página web.
2. Base de datos de MongoDB para guaradar los datos de la web.
3. Kong Gateway para el manejo y gestión de APIs.
4. Kong DB PostgreSQL para los datos de Kong.
5. Kong Migration para migrar los datos de BD de Kong.
6. Konga la interfaz gráfica para usar Kong.
7. Konga DB para guardar los datos de Konga.

**Imágenes Docker:** Las imágenes Docker son plantillas de solo lectura que se utilizan para crear contenedores. Una imagen contiene todo lo necesario para ejecutar una aplicación, incluidos el sistema operativo base, las bibliotecas y el código de la aplicación. Las imágenes se almacenan en registros de Docker, como Docker Hub, y pueden compartirse y reutilizarse fácilmente.

**Dockerfile:** Un Dockerfile es un archivo de texto que contiene instrucciones para construir una imagen Docker. Especifica cómo se debe configurar el entorno de ejecución del contenedor, qué archivos y dependencias se deben incluir en la imagen, y cómo se debe configurar la aplicación.

**Docker Compose:** Docker Compose es una herramienta que permite definir y gestionar aplicaciones de varios contenedores. Permite definir la configuración de una aplicación en un archivo YAML, incluidos los servicios, las redes y los volúmenes, y luego orquesta la creación y ejecución de los contenedores según esa configuración.
  
A pesar de que la construcción de la arquitectura utilizando Docker Compose puede resultar más compleja en comparación con enfoques tradicionales, las ventajas que ofrece superan ampliamente esta complejidad. El uso de Docker otorga escalabilidad y elasticidad a las aplicaciones gracias a su enfoque basado en contenedores. Estos contenedores son ligeros y comparten recursos del sistema, lo que permite ejecutar numerosos contenedores en un único host sin sacrificar el rendimiento. Además, Docker ofrece características de aislamiento de recursos que garantizan que cada contenedor opere de forma independiente. Esto facilita la escalabilidad horizontal mediante la replicación de contenedores en múltiples hosts, gestionada por herramientas de orquestación como Docker Swarm o Kubernetes. Asimismo, la arquitectura basada en microservicios promovida por Docker permite escalar y gestionar cada componente de la aplicación de manera independiente. Además, Docker simplifica el proceso de creación y despliegue de aplicaciones mediante la creación de imágenes portátiles que encapsulan todas las dependencias necesarias, lo que facilita la implementación rápida y repetible de nuevas instancias de la aplicación.
    
## Servicios 
El sistema está compuesto por varios servicios Docker administrados mediante Docker Compose. Cada servicio desempeña un papel específico en la aplicación global y se comunica con otros servicios a través de una red compartida. Estos son los servicios que se utilizan en la página web:

    1.  Servicio Web:  
        Descripción: Este servicio aloja la aplicación principal de la plataforma.  
        Implementación: Se construye a partir de un directorio local (./gestecord) y se ejecuta en un contenedor Docker. Expone los puertos 8080 y 3000.  
        Dependencias: Conectado a la red "kong-net" para la comunicación con otros servicios.  
    
    2. Base de Datos MongoDB:  
        Descripción: Almacena los datos principales de la aplicación.  
        Implementación: Se basa en la imagen de Docker mongo:7.0.5-jammy y se configura para utilizar una base de datos llamada "gestecord".  
        Dependencias: Conectado a la red "kong-net" para la comunicación con otros servicios.  
    
    3. Base de Datos PostgreSQL (Kong):  
        Descripción: Almacena los datos de configuración y metadatos para el servicio de API Gateway Kong.  
        Implementación: Utiliza la imagen de Docker postgres:9.6.  
        Dependencias: Conectado a la red "kong-net" para la comunicación con otros servicios.  
    
    4. Migración de Base de Datos Kong:  
        Descripción: Se encarga de inicializar y migrar la base de datos utilizada por Kong.  
        Implementación: Utiliza la imagen de Docker kong:latest.  
        Dependencias: Conectado a la red "kong-net" y depende del servicio "kong-database" para la migración adecuada de la base de datos.  
    
    5. Kong API Gateway:  
        Descripción: Proporciona una puerta de enlace para administrar y enrutar solicitudes de API.  
        Implementación: Se basa en la imagen de Docker kong:latest.  
        Dependencias: Conectado a la red "kong-net" y depende del servicio "kong-migration" para inicializar la base de datos de Kong.  
    
    6. Preparación de Base de Datos Konga:  
        Descripción: Se encarga de inicializar y preparar la base de datos utilizada por Konga (Interfaz de usuario para Kong).  
        Implementación: Utiliza la imagen de Docker pantsel/konga:0.14.9.  
        Dependencias: Conectado a la red "kong-net" y depende de servicios relacionados con Kong.  
    
    7. Konga (Interfaz de Usuario para Kong):  
        Descripción: Proporciona una interfaz gráfica para administrar Kong.  
        Implementación: Se basa en la imagen de Docker pantsel/konga:0.14.9.  
        Dependencias: Conectado a la red "kong-net" y depende de servicios relacionados con Kong. 

### Comunicación:

La comunicación entre microservicios se establece a través de una red personalizada definida en el archivo de configuración de Docker Compose. En nuestro caso, esta red personalizada se denomina kong-net. Cada servicio definido en el archivo de Docker Compose se asigna a esta red utilizando la propiedad networks. Por ejemplo, los servicios web, db, kong-database, kong-migration, kong, konga-prepare y konga están todos configurados para formar parte de la red kong-net.  
    
Esta configuración permite que los contenedores de cada servicio se comuniquen entre sí a través de la red kong-net. La comunicación entre los servicios puede ser bidireccional, lo que significa que los contenedores pueden enviar solicitudes y recibir respuestas entre sí como si estuvieran en la misma red local, independientemente de en qué host estén ejecutándose los contenedores.  
  
Además de la comunicación a través de la red, algunos servicios también comparten volúmenes para el almacenamiento persistente de datos. Por ejemplo, el servicio db tiene configurados volúmenes para almacenar datos persistentes de MongoDB. Esto garantiza que los datos de la base de datos MongoDB persistan incluso si el contenedor se reinicia o se detiene.

### Redes:

  kong-net: Proporciona una red compartida para todos los servicios relacionados con Kong, permitiendo la comunicación entre ellos de manera eficiente.

## Dockerfile
Este archivo se utiliza para construir una imagen de Docker que ejecuta una aplicación Node.js. La imagen resultante incluirá la aplicación y todas sus dependencias, y estará lista para ser ejecutada como un contenedor Docker. Para la construcción de las imagenes se ejecutan las siguientes instrucciones:

1. **FROM node:**  
   Esta instrucción indica que la imagen base para esta nueva imagen de Docker será la imagen oficial de Node.js. Esto significa que la imagen de Node.js se utilizará como punto de partida para construir la nueva imagen.

2. **ENV PORT 80:**  
   Esta instrucción establece una variable de entorno llamada PORT con el valor predeterminado de 80. Esta variable de entorno se utilizará más adelante en el archivo Dockerfile.

3. **ENV WORKDIR /tmp/web:**  
   Esta instrucción establece una variable de entorno llamada WORKDIR con el valor /tmp/web. Esta variable se utilizará para definir el directorio de trabajo en el que se copiarán los archivos de la aplicación.

4. **EXPOSE ${PORT}:**  
   Esta instrucción expone el puerto definido por la variable de entorno PORT. Esto significa que cuando se ejecute un contenedor basado en esta imagen, el puerto especificado estará disponible para ser accesible desde fuera del contenedor.

5. **COPY . ${WORKDIR}:**  
    Esta instrucción copia todos los archivos del directorio actual (el directorio en el que se encuentra el Dockerfile) al directorio de trabajo definido por la variable WORKDIR.

6. **WORKDIR ${WORKDIR}:**  
    Esta instrucción establece el directorio de trabajo actual dentro del contenedor en el valor de la variable WORKDIR. Esto significa que todos los comandos siguientes se ejecutarán dentro de este directorio.

7. **RUN npm install:**  
    Esta instrucción ejecuta el comando npm install dentro del directorio de trabajo del contenedor. Este comando instala todas las dependencias de Node.js especificadas en el archivo package.json de la aplicación.

8. **RUN npm run build:**  
    Esta instrucción ejecuta el comando npm run build dentro del directorio de trabajo del contenedor. Este comando se utiliza comúnmente para compilar la aplicación o generar cualquier artefacto necesario para su ejecución.

9. **CMD npm run start:**  
    Esta instrucción define el comando predeterminado que se ejecutará cuando se inicie un contenedor basado en esta imagen. En este caso, el comando npm run start se utilizará para iniciar la aplicación Node.js.

## Llamadas API  

Se importan algunas librerías para el uso de las APIs:
1. Librerías de mongo: Para la conexión con la BBDD y representar identificadores únicos de MongoDB.
2. NextRequest y NextResponse: Manejo de las solicitudes y respuestas de los controladores de ruta para Next.js.
3. Zod: Validador de esquemas para TypeScript.

### Definición de esquema:  

NewContestant, este esquema define la estructura esperada de los datos de un concursante nuevo, que incluye name, surname, y gender.  

### Operaciones GET y POST:  
La función GET está diseñada para manejar solicitudes HTTP GET, en cambio, la función POST de voto está diseñada para manejar solicitudes HTTP POST.

**Concursantes**  
  
La función GET de los concursantes obtiene la lista de concursantes de la base de datos, eliminando el campo votes, ordenándola por la fecha de creación (createdAt) de manera descendente y limitando el resultado a 2 concursantes. Luego, responde con los concursantes obtenidos en formato JSON.  
  
La función POST de los concursantes está diseñada para manejar solicitudes HTTP POST. Esta función espera datos JSON en la solicitud, que representan un nuevo concursante. Primero, analiza y valida los datos del concursante según el esquema definido (NewContestant). Si la validación tiene éxito, inserta el nuevo concursante en la base de datos con un campo adicional votes (inicializado como un array vacío) y la fecha de creación (createdAt). Finalmente, responde con un mensaje indicando que el concursante se registró correctamente. Si hay errores de validación, responde con los errores de validación en formato JSON con un código de estado 400 (BadRequest). Si ocurre algún otro error durante el proceso, responde con un mensaje genérico indicando que algo salió mal y un código de estado 500 (InternalServerError).  

**Voto**

Solo tiene una funcion POST y esta función espera un parámetro id en la ruta de la solicitud, que representa el ID único del concursante al que se quiere votar. Primero se convierte el parametro id en un ObjectId de Mongo y se obtiene el concursante con dicho ObjectId. Si no existe ningun concursante con ese id se lanza un error para indicar que ese concursante no está en el concurso y si por el contrario existe un concursante se actualiza la BBDD agregando la fecha y hora del voto actual. Al finalizar la actualización de BBDD correctamente se indica que la operación se ha realizado correctamente y si por cualquier error durante el proceso no se ha podido realizar la operación se muestra un error genérico (Error 500).

## Autenticación, Autorización y Auditoría (AAA)
**Autenticación:** La API Key se utiliza para autenticar a los usuarios o servicios que intentan acceder a la API. Cuando un cliente realiza una solicitud a la API, incluye la API Key en la solicitud para demostrar su identidad. La API verifica la validez de la API Key para determinar si el cliente tiene permiso para acceder a los recursos protegidos por la API.  

**Autorización:** Una vez que la autenticación es exitosa y la API Key es válida, el sistema de AAA puede proceder a la autorización. Esto implica determinar qué recursos y operaciones específicas tiene permitido realizar el cliente basado en su identidad autenticada y sus permisos asociados. La autorización define los límites del acceso del cliente a los recursos protegidos por la API. En nuestro sistema de momento se tiene una solo key que da acceso a ver los votos y añadir nuevos concursantes, esto pensado para el uso del administrador.  

**Auditoría:** El uso de la API Key también puede ser registrado y auditado para fines de seguridad y cumplimiento. Los registros de auditoría pueden incluir información sobre qué clientes utilizaron la API Key, cuándo se utilizaron, qué recursos se accedieron y qué acciones se realizaron. Estos registros pueden ser útiles para el seguimiento de actividades, la detección de anomalías y la investigación de incidentes de seguridad. Cada vez que alguien haga una petición a la API key se registrara esa petición en un fichero local para llevar el registro y poder consultarlo en cualquier momento.

## Ejecución

Para desplegar el sistema en un entorno de prueba local, utilizamos Docker Compose, una herramienta que facilita la gestión de aplicaciones multi-contenedor.

Para ello, proporcionamos un archivo de configuración docker-compose.yaml, que define y configura los servicios necesarios para el despliegue. En esto se incluyen el servidor web con su base de datos y kong y konga con sus respetivas bases de datos. También se indican los puertos a través de los cuales se accederá a la aplicación y como en que red se comunican. Además, se emplea un archivo Dockerfile, que contiene las instrucciones para la construcción de la imagen del servidor web.

Gracias a los dos ficheros se consigue que el despliegue del sistema sea muy facil y rápido. Solamente hace falta ejecutar el comando "docker compose up" y de manera automatizada se consigue la consitencia del entorno de prueba con el sistema de producción. Desplegar el sistema es facil, de la misma manera que revertirlo con el comando "docker compose down" que elimina los contenedores, volumenes y redes que se hayan levantado al desplegarlo.

La aplicación se puede ejecutar mediante un comando específico (docker compose up) que inicia el despliegue del sistema en su entorno local. Este proceso se lleva a cabo de manera automatizada y garantiza la consistencia del entorno de prueba con el sistema en producción.  
  
Una vez que el sistema está desplegado, los usuarios tienen la capacidad de emitir votos a favor de cualquiera de los dos concursantes disponibles y también pueden acceder a información detallada sobre cada uno de ellos. Estas funciones están abiertas para todos los usuarios. Por otro lado, mediante el uso de una API key, se habilita la opción de añadir nuevos participantes al concurso y obtener información sobre los votos emitidos para cada concursante. Este mecanismo de autenticación permite el acceso a funcionalidades adicionales y privilegiadas dentro del sistema.

