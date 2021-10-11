import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Main } from "../layouts/Main";

const Home = React.lazy(() => import("../view/home/Home"));

const publicPaths = [{ exact: true, path: "/", component: Home }];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Router>
    <Switch>
      <Suspense fallback={<div />}>
        {publicRoutes}
        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Switch>
  </Router>
);
