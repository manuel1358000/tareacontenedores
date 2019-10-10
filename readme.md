# Tarea Contenedores Laboratorio Software Avanzado


Acontinuacion se encuentran las generalidades de la tarea del laboratorio de software avanzado, el cual se centra en el uso de contenedores por medio de docker, desplegando dos contenedores por medio del archivo docker-compose. Tambien haciendo uso de volumenes para que persista la informacion de los contenedores y no se pierda.

## Comenzando 🚀

    Funcionalidades:
    1. Contenedor 1: Servicio web en nodejs donde se muestra una pagina de usuarios, se muestra nombre, carnet y direccion, estos datos son consumidos al conteneodor2.
    2. Contenedor 2: Servicio de base de datos en postgresql en la cual se tiene un script que se coloca en el volumen que se crea para poder ejecutarlo cada ves que se desea.

## Construido con 🛠️

Las herramientas utilizadas para el deploy del proyecto son:

* [VSCode](https://code.visualstudio.com/) - VS-Code
* [Github](https://github.com/) - GitHub
* [NodeJs](https://nodejs.org/es/) - NodeJS

## Archivo docker-compose.yml 📌
* Este archivo esta compuesto de varias etiquetas que nos ayudan a realizar tareas especificas al momento de la construccion de los contenedores dentro de las principales tenemos las siguientes.
    -   image: nos indica el nombre de la imagen que sera la base del contenedor.
    -   ports: aqui vamos a mapear los puertos a los que se van a relacionar, este esta definido por el siguiente formato xxxx:yyyy donde las x's es el puerto de nuestro servidor y las y's es el puerto de salida del contenedor.
    -   services: aqui se indican y se desarrollan los contenedores que se van a tener.
    -   volumes: indica la carpeta local y la carpeta que se quiere almacenar por parte del contenedor.
    -   build: en esta seccion nos indica el dockerfile que queremos tener para realizar configuraciones mas especificas del contenedor.

    Se tiene que resaltar que la identacion en el archivo docker-compose es importante para que no ocurra un error al momento de realizar el docker-compose up

## COMANDOS PARA EJECUTAR DOCKER-COMPOSE 📌
*   docker-compose up: permite levantar los contenedores que fueron previamente arrancados.
*   docker-compose up --build: permite crear la configuracion inicial de los contenedores y los inicia.
*   docker-compose stop && sudo docker-compose rm -f: permite detener los volumenes y contenedores que tengamos activos y los elimina para levantarlos de manera limpia.
*   docker images: permite ver las imagenes que tenemos en el host.
*   docker ps -a: permite listar los volumenes de los contenedores que estan activos.

## Versionado 📌

Utilizo [Github](https://github.com/manuel1358000/tareacontenedores.git) para el versionado. Puede revisar el codigo completo en el siguiente [Repositorio](https://github.com/manuel1358000/tareacontenedores.git)

## Autor ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Manuel Fuentes 201213580** - *Desarrollo* 
* **Manuel Fuentes 201213580** - *Documentación*
