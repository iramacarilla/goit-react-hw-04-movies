import { lazy } from "react";

const moviesDetailsRoutes = [
  {
    path: "/cast",
    name: "Cast",
    exact: false,/*true*/
    component: lazy(() =>
      import(
        "../pages/cast/Cast" /* webpackChunkName: "Cast"*/
      )
    ),
  },
  {
    path: "/reviews",
    name: "Reviews",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/reviews/Reviews" /* webpackChunkName: "Reviews"*/
      )
    ),
  },
  
];

export default moviesDetailsRoutes;