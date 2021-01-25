/*import React from "react";
import moviesDetailsRoutes from "../../routers/moviesDetails";
import { NavLink } from "react-router-dom";


const MoviesNavigetionsDetails = ({match, id, location}) => {
  <ul >
      {moviesDetailsRoutes.map(({ path, exact, name }) => (
        <li  key={path}>
          <NavLink
            to={
                {pathname:`${match.url}${path}`,
                state: {
                    from: this.location.state,
                    id: {id},
                }
            }} 
            exact={exact}
           
           >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  /*return (
    <ul >
      {moviesDetailsRoutes.map(({ path, exact, name }) => (
        <li  key={path}>
          <NavLink
            to={`${match.url}${path}`} 
            exact={exact}
           
           >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );*/
      /*};

export default MoviesNavigetionsDetails;*/