import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    
    const user = window.localStorage.getItem('TodoUser');

  return <Route {...rest} component={(props) => {
      if(user) {
          return <Component {...props} />
      }else{
          return <Redirect to={`/signin`} />
      }
  }} />
}

export default PrivateRoute;
