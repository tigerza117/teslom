import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "@layouts/Layout";
import ModelS from "@views/product/ModelS";
import Model3 from "@views/product/Model3";

const Home = React.lazy(() => import("@views/home/Home"));

const publicPaths = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/models", component: ModelS },
  { exact: true, path: "/model3", component: Model3 },
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Router>
    <Switch>
      <Suspense fallback={<div />}>
        <Layout>
          {publicRoutes}
          {/* <Route component={NotFound} /> */}
        </Layout>
      </Suspense>
    </Switch>
  </Router>
);
