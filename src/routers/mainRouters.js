import { lazy } from "react";

const mainRouters = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/homePage/HomePage" /* webpackChunkName: "Cast"*/
      )
    ),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: false,/*true*/ 
    component: lazy(() =>
      import(
        "../pages/moviesPage/MoviesPage" /* webpackChunkName: "Reviews"*/
      )
    ),
  },
  
];
/*const secondRoute = {
    path: "/movies/:movieId",
    name: "movieDetailsPage",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "Cast"*/
   /*   )
    ),
}*/

export default mainRouters;