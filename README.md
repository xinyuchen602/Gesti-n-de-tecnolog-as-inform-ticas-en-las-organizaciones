# Manual en local
Ir a la raiz del directorio y ejecutar: docker compose up
El sitema va a crear 3 contenedores: web funcionando en port 8080, kong funcionando en port 8000 y 8001 y konga en port 1337

# Manual de AWS
Crear primero un service con task definition: kong-with-environment:7 y otro service con task definition konga:4, asi se ejecuta la migration de kong y konga.
Después de terminar migration el task se termina y se queda como failed y ya se puede eliminar esos servicios.
Ahora ya podemos crear service con task definition kong-with-environment:25, konga:5 y web2:6.
Para que las routes de kong funciona correctamente tenemos que ir a konga http://kong2-lb-974748907.us-east-1.elb.amazonaws.com:1337, en apartado tenemos que configurar el ip del servicio kong.
![image](https://github.com/xinyuchen602/Gestion-de-tecnologias-informaticas-en-las-organizaciones/assets/83186292/38c83d38-eeb7-4828-87c4-50971835d773)
En Service cuando pregunta host hay que poner el ip del service web.
![image](https://github.com/xinyuchen602/Gestion-de-tecnologias-informaticas-en-las-organizaciones/assets/83186292/17c089b4-2627-40a8-a8e8-56a307c3b621)

