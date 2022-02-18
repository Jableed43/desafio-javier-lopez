# La compañia ingertec solicitó el siguiente desafío:


## 1° Parte - Maquetación css / html, bootstrap, responsive, uso de AJAX

Empezar una página html de cero que dentro utilice Bootstrap 4 o 5.
De más está decir que debe ser responsive. 

### La página debe tener:
- Un título.
- 5 imágenes en la misma fila. 
- 5 descripciones debajo de cada imagen
- 5 contadores de visitas debajo de cada imagen con un icono
- Si se hace clic en las imágenes pares, debe abrir un modal y mostrar la imagen a mayor tamaño. Cada vez que se haga clic en las imágenes pares, se debe incrementar su contador de visitas.
- Si se hace clic en las imágenes impares, se debe abrir un popup (con window.open) con título y dimensiones 800 ancho x 400 alto. Se debe mostrar la imagen que ocupe todo el popup. Si se redimensiona el popup, debe redimensionarse la imagen. El popup debe tener 2 botones: OK y Cerrar. Si se hace clic en OK, debe actualizar el contador de su imagen en la pantalla anterior sin cerrar el popup. Si se hace clic en Cerrar, se cierra el popup.
- Debajo de todas las imágenes, se debe agregar un botón “Cargar Texto” y textarea (no son 5 botones, es un solo botón). Debe hacer una llamada AJAX para cargar en el textarea, la variable “texto” del siguiente json:

{“pagina”:”home”,”texto”:”este es el texto que debe aparecer en el textarea luego de hacer la llamada ajax”}
		Este json, puede ser un fichero que se llame “home.json”.
    
    
## 2° Parte Base de datos

- Crear una base de datos en Mysql en la maquina local que se llame “miPrimerNombre” + “yyyyMMdd”, guardar los scripts usados para crear las tablas.

- Debe tener las siguientes tablas:

tresource_type:
idResourceType int autoincrement PK
created datetime
descrip varchar(200)


tresource:
idResource int autoincrement PK
created datetime
descrip varchar(200)
idResourceType int FK

- Las tabla de tipos de recursos debe tener los siguientes valores: (guardar los inserts utilizados para poblar la tabla)
Vídeo
PDF Documentación
PDF Enunciado
PDF Solución

- Se deben crear al menos 6 registros en la tabla tresource y que estén clasificados según los datos de tresource_type. (guardar los inserts utilizados para poblar la tabla)

- Se debe hacer una query que cuente cuantos registros hay por tipo de recurso. (guardar la query)
