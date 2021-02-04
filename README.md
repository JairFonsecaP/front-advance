# Prueba Jr. DevAdvance

Se desarrollaron todas las pruebas planteadas en el documento "PruebaAdvance.pdf" de la siguiente manera:

### 1. Prueba Técnica:

Las respuesta se encuentran en el archivo “prueba-tecnica.md” en este mismo repositorio.

### 2. prueba práctica:

#### 2.1

Los scripts de SQL, se encuentran en el backend que se encuentra en el repositorio ubicado en el siguiente enlace https://github.com/JairFonsecaP/back-advance en la diccionario 'database’ en el archivo ‘db.sql’ .
Las tablas quedaron guardas remotamente en el enlace https://remotemysql.com/phpmyadmin/ se puede acceder con el user: wtlGBn7iaf
Y el password: sd1gLl5UKt, están las 3 tablas creadas y relacionadas.

Los dos registros que no se pueden eliminar es por que tienen otras tablas relacinadas entonces no deja eliminarlos.

#### 2.2

Se creó el backend en node.js, usando express con los cuatro endpoints solicitados, además se creó los endpoints “activate”, “deactivate” que activan y desactivan el status del employee, “activatemail” que activa al employee con el enlace que se envia al correo, adicionalmente se generó el end point “send” que primero valida el genero del employee para personalizar el correo y un método que genera un url personalizada para que cuando el empleado de click al botón que está en el correo que se le envía su status cambie y quede activo activado.
El backend está deplegado en https://back-crud-advance.herokuapp.com/ y en la ruta https://back-crud-advance.herokuapp.com/api/employee/list, muestra todos los registros de la tabla Employee de la base de datos.

#### 2.3

El frontend se realizó en React una interfaz que muestra la lista de empleados que hay en la base de datos las columnas que se muestran son documento, nombre, apellido, teléfono además de una columna con tres iconos, uno que muestra el status del empleado y al oprimirse cambia el status, otro que permite editar el usuario con un formulario que se muestra y un botón de borrar que genera una confirmación tipo modal de react con un botón de confirmar y uno para declinar la solicitud para que el usuario esté seguro de eliminar el registro. También se muestra un botón para crear un usuario nuevo que despliega un formulario con los campos nombre, apellido, genero(menú desplegable), email, dirección, teléfono, tipo de documento(menú desplegable) y documento de los cuales el único no obligatorio es la dirección. Este formulario es el mismo que el de editar usuario ya que se reutiliza.
Este front se encuentra en este link de heroku también

#### 2.4

Se crea un mail en html siguiendo los requerimientos y el mockup “mail.png”, que cuando se envía y visto con mailspring se logra visualizar como el de la imagen “correoactivacion.png”.

#### 2.5

Cuando se crea un usuario nuevo desde la interfaz se envía el correo generado al mail ingresado por el usuario.

Se adjunta feedback de la prueba en el archivo feedbak.md
