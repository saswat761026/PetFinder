import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Login, Home, SignUp } from "./component/index";

const pageRoutes = [
  {
    path: "/",
    component: Home,
    additionalProps: {},
  }
];

const defaultRoutes = [
  {
    path: "/",
    component: Login,
    additionalProps: {},
  },
  {
    path: "/signup",
    component: SignUp,
    additionalProps: {},
  }
];

const errorRoutes = [
  // {
  //   path: "/error",
  //   component: Component,
  //   additionalProps: {},
  // },
  {
    path: "*",
    component: Login,
    additionalProps: {},
  },
];

const Routes = (props) => {
  let routes = props.isLoggedIn
    ? [...pageRoutes, ...errorRoutes]
    : [...defaultRoutes, ...errorRoutes];

  return (
    <Switch>
      {routes.map((route, index) => {
        return route.path !== "*" ? (
          <Route
            exact={true}
            key={index}
            path={route.path}
            render={(props) => (
              <route.component
                additionalProps={route.additionalProps}
                {...props}
              />
            )}
          />
        ) : (
          <Redirect key={index} from="**" to="/" />
        );
      })}
    </Switch>
  );
};

export default Routes;
