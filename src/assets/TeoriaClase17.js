/*Antes de continuar con el proyecto es importante repasar los siguientes conceptos:

Una landing page (página de inicio) es la página web a la que se dirige a un usuario de Internet después de hacer clic en un hipervínculo 
(puede ser un enlace en un correo electrónico o un botón de llamada a la acción u otros. Fuente: aquí.)

Git es el sistema de control de versiones que permite llevar un control de todos los cambios a lo largo del tiempo de nuestros proyectos.

Github es una plataforma de desarrollo colaborativo que permite subir nuestros repositorios de Git a la nube.

CONFIGURACION DEL PROYECTO LANDING PAGE:

Crear un repositorio para agregar todos los recursos, se manejará plantillas html, css, JS y API de preferencia.
Entrar a https://github.com/ e iniciar sesión y dar en el botón verde para crear nuevo proyecto.
En Repository name indicar el nombre del proyecto. En Description (optional) una descripción del proyecto.
Indicar si queremos que el proyecto esté público o privado. También activar la casilla de Add a README file para que nos agregue ese archivo.
Seleccionar un template en .gitignore y escoger Node.
En la licencia colocar MIT. Dar click en el botón verde para crear el repositorio.
Ahora vamos a clonar el proyecto para trabajarlo desde VSC, para ello al dar click en el botón Code en la pestaña HTTPS copiar el enlace, 
abrir la terminal con Ctrl + Alt + T posicionarnos donde queremos que esté el proyecto y escribir: git clone aqui-va-el-enlace-copiado y 
dar ENTER; con ésto descarga de la nube a la máquina el código con las instrucciones que generamos anteriormente.
Entrar con cd nombre-del-proyecto y vamos a inicializar el proyecto con la estructura por defecto del flag -y con la instrucción: 
npm init -y y dar ENTER; en la consola arroja el package.json por defecto.
Abrimos el editor VSC con code .
Dentro, creamos la carpeta src y dentro de src se crea el archivo index.js
También creamos la carpeta assets (estará todo nuestro código de JS) dentro de la carpeta src, en la ruta src/assets se crea el 
archivo main.js
Vamos al enlace de github del profesor donde tiene una estructura de una landing (con la cabecera <head>, el cuerpo <body>, etc), lo 
copiamos y vamos a index.html y lo pegamos.
Por lo general cuando pegamos en un archivo en VSC, queda mal la indentación, para arreglarlo automáticamente, seleccionar todo el código, 
dar click derecho y seleccionar Format Selection o con el shortcut: Ctrl + K Ctrl + F
Podemos correr el index.html con Live Server (click derecho al nombre del archivo y seleccionar Live Server), para ello debemos tener 
instalado la extensión: para instalarlo → Ctrl + P y pegar: ext install ritwickdey.LiveServer y dar ENTER (Fuente: aquí)
.
🎨 Herramientas que podemos usar para modificar la apariencia de la página:
.

Buscar imágenes para fondo gratuitas: https://pixabay.com/es/
Buscar iconos gratuitos: https://icon-icons.com/es/
Buscar paletas de colores: https://htmlcolorcodes.com/es/
Agregar efecto de gradiente a los fondos de colores: https://cssgradient.io/
Cambiar el tipo de fuente: https://fonts.google.com/
Convertir una imagen a formato svg: https://picsvg.com/es/
*/