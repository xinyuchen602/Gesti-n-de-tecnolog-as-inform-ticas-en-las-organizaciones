# RFI II
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
