# Prueba Técnica

### 1.1. ¿Qué es html, css y javascript?

#### \* HTML:

Es un lenguaje de marcado para estructurar contenido web.

#### \* CSS:

Es un lenguaje que da los estilos visuales a lo antes ya escrito en HTML.

#### \* Javascript:

Es el único de estos 3 que se considera lenguaje de programación y es interpretado, se usa demasiado para el frontend dando animaciones, y haciendolo dinamico a este y por muchos años fue solo para eso, pero actualmente se puede usar para cualquier cosa gracias al entorno de desarrollo 'Node.js'.

### 1.2. ¿Para maquetar un email utilizaría divs o utilizaría tablas y por qué?

Creo que la mejor manera es en tablas, porque al hacerlo con "div" suele dar problemas, y lo que se ve con un navegador o servidor de mail se puede ver distinto en otro, las tablas son más basicas y permiten estructurar un mejor código sin necesidad de usar muchos estilos css para el posicionamiento.

### 1.3. ¿Son las etiquetas "br" la única manera de separar secciones de texto?

La única que conozco es:

```html
<br />
```

### 1.4. ¿Cuántos tipos de CSS existen?

#### \* Externos

#### \* Incrustados

#### \* En linea

### 1.5. El posicionamiento absoluto nos permite colocar un elemento en un punto exacto,y se quede ahí aunque desplacemos la página. La anterior afirmación es verdaderao falsa, argumente su respuesta.

Falso, porque el posicionamiento absoluto lo toma con respecto al body, a menos que se le de otro tipo de pocisionamiento al contenedor padre diferente al static, es decir que si le hacemos scroll a la pagina se va a mover con el body total del documento, para poder que un elemento se quede en solo punto podemos usar el siguiente codigo:

```css
position: fixed;
```

### 1.6. ¿Qué propiedad CSS nos permite ocultar las viñetas de una lista?

```css
list-style: none;
```

### 1.7. ¿Qué es ‘float’ en CSS? Explíquelo con sus palabras.

Es un tipo de posicionamiento que quita la caja de su lugar predeterminado y la deja mover a donde uno quiera, luego de aplicar este pocisionamiento los demas elementos pueden ocupar su lugar.

### 1.8. ¿Qué recogen los selectores CSS ‘clase’ y ‘ID’ cuando se emiten? ¿Cómo los identificas en css?

La class permite llamar los estilos de la hoja de estilos que se hayan definido para traerlos se tiene que poner antes del nombre de la clase hay que poner un punto seguido del nombre de la clase, aplicandolo así a la etiqueta que los contenga.

El id es un identificador único, sirve para identificar la etiqueta en scrips y en css, en este caso se pueden traer los estilos definiendolos en la hoja de estilos con un "#".

La calse a diferencia de el id, puede tener más de una por elemento y tmabien varios elementos pueden tener la misma clase.

Se definen asi en nuestro HTML:

```html
<nav class="nav-bar fondo" id="nav">
  <div class="fondo" id="articule"></div>
</nav>
```

Y siguiendo con el ejemplo se puede llamar de la siguiente maneraÑ

```css
/*LLAMADO POR CLASE*/
.nav-bar {
  display: flex;
  justify-content: space-between;
  flex-direccion: column;
}

.fondo {
  background-color: #f9f9f9;
}

/*LLAMADO POR ID*/
#nav {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 300;
  color: #06e2b3;
}
```

Por su parte el id de un etiqueta HTML

### 1.9. Utilizando Sass explique o escriba la estructura de cómo le daría estilos al siguiente bloque de código:

```html
<div class="content">
  Lista de enlaces:
  <ul>
    <li>
      <a href="#">Enlace 1</a>
    </li>
    <li>
      <a href="#">Enlace 2</a>
    </li>
    <li>
      <a href="#">Enlace 3</a>
    </li>
  </ul>
</div>
```

No sé :(

### 1.10. ¿Qué significa la palabra clave 'this' en JavaScript?

Es una referencia al objeto desde el cual se llama a la función.

### 1.11. ¿Cómo se puede cambiar el estilo/clase de un elemento en JavaScript?

```javascript
const nav = document.getElementById("nav");
nav.style:{
  backgroudColor: #f9f9f9
}
```

_creo recordar que es así_

### 1.12. ¿Qué es un callback?

Es una funcion que llama otra función para poder completarse.

### 1.13. ¿Qué es una API?

Es una agrupacion de protocolos que permiten integrar diferentes sistemas sin que uno sepa como esta implementado el otro.

### 1.14. ¿Qué beneficios existen de JSON sobre XML?

El JSON es mucho más legible y ligero que el XML.

### 1.15. ¿Qué protocolo utilizan los servicios web RESTful?

http

### 1.16. ¿Debería almacenarse los token de acceso JWT en el servidor o la base de datos?¿Por qué?

Normalmente se almacenan en local storage del navegador para que el usuario tenga la sesion abierta.

### 1.17. ¿Cuáles son las diferencias entre los comandos ‘delete’ y ‘truncate’?

"DELETE" hace un borrado selectivo ya que permite poner una condicion "WHERE" en cambio "TRUNCATE" elimina todo el contenido de una tabla.

### 1.18. Explique el uso de la palabra clave Join y sus distintos tipos.

Combina columnas de varias tablas en las que haya coincidencia

##### \* INNER JOIN:

Cuando haya coincidencia devuelve todos los registros de ambas tablas

#### \* RIGHT JOIN

Devuelve todas los registros en los que haya coincidencia y la tabla que se ponga a la derecha de la consulta.

#### \* LEFT JOIN

Devuelve todas los registros en los que haya coincidencia y la tabla que se ponga a la izquierda de la consulta.

### \* OUTER JOIN

Retorna ambas tablas, es una combinacion de las consultas con RIGHT JOIN y LEFT JOIN

### 1.19. ¿Cuál es la diferencia entre las cláusulas having y where?

Con el WHERE podemos filtrar registros individuales mientras con el HAVING se hacen filtros grupales por lo cual se tiene que operar cuando haya en la consulta un GROUP BY.

### 1.20. Explique el uso de la palabra clave Group by y nombre con cuales funciones se usa más a menudo.

Agrupa los registros y se puede pasar por parametros diferentes metodos para agrupar los registros segun lo que se necesite.

```sql
/*CUENTA CUANTOS REGISTROS HAY IGUALES DE LA COLUMNA*/
COUNT
/*DA EL PROMERDIO DE LOS REGISTROS DE LA COLUMNA*/
AVG
/*SUMA EL TOTAL DE LOS REGISTROS DE LA COLUMNA */
SUM

```
