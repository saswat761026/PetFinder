import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {Login} from './component/index';

const pageRoutes = [
//   {
//     path: "/home",
//     component: Component,
//     additionalProps: {},
//   },
];

const defaultRoutes = [
    {
        path: "/",
        component: Login,
        additionalProps: {},
      },
      {
        path: "/login",
        component: Login,
        additionalProps: {},
      },
    //   {
    //     path: "/createAccount",
    //     component: Component,
    //     additionalProps: {},
    //   },  
]

const errorRoutes = [
//     {
//         path: "/error",
//         component: Component,
//         additionalProps: {},
//       },
    {
        path: "*",
        component: Login,
        additionalProps: {},
    }
 ]

const isLoggedIn = true;

const routes = isLoggedIn?[...defaultRoutes,...pageRoutes, ...errorRoutes]:[...defaultRoutes, ...errorRoutes]

const Routes = (props) => {
  return (
      <Switch>
      {routes.map((route, index) => {
        return (
          (route.path!=="*") ? 
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
          />:
          <Redirect
              key={index}
              from="**"
              to="/"
          />
        );
      })}
    </Switch>)
};

export default Routes;
