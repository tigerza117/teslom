import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("../view/home/Home"));

const publicPaths = [{ exact: true, path: "/", component: Home }];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Switch>
    <Suspense fallback={<div />}>
      {publicRoutes}
      {/* <Route component={NotFound} /> */}
    </Suspense>
  </Switch>
);
