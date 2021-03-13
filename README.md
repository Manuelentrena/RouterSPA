### ROUTER EN JS VANILLA

## Los pasos que se van a seguir para llevar a cabo la creación del Router del lado del cliente para SPA son:

1. loadInitialRoute()

Cargar la ruta
Identificar en donde nos encontramos en el sitio. (Carga inicial de la ruta).

2. matchUrlToRoute()

Comparar la URL con una ruta
La URL a la que nos queremos mover, se debe comparar con las rutas que tenemos.

3. refreshRoute()

Actualizar la URL en la barra de navegación
Para esto utilizaremos el método de HTML pushState. (windows.history.pushState).

4. loadRoute()

Actualizar el DOM con el nuevo contenido
Para esto vamos a usar innerHTML.
