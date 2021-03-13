import Router from "./router.js";
import { routes } from "./routes.js";

/* Seleccionamos los botones */
const btnListRoute = [...document.querySelectorAll("[data-router]")];

/* Genero eventos Cliks del menu de navegación */
btnListRoute.forEach((btn) => {
  btn.addEventListener("click", () => {
    router.loadRoute(btn.dataset.router);
  });
});

/* Declaro la instancia de Router */
const router = new Router(routes);
