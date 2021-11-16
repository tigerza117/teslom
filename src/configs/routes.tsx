import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "@layouts/Layout";

const Home = React.lazy(() => import("@views/home/Home"));
const ModelS = React.lazy(() => import("@views/product/ModelS"));
const Model3 = React.lazy(() => import("@views/product/Model3"));
const ModelX = React.lazy(() => import("@views/product/ModelX"));
const ModelY = React.lazy(() => import("@views/product/ModelY"));
const SolarRoof = React.lazy(() => import("@views/product/Solar-Roof"));
const SolarPanel = React.lazy(() => import("@views/product/Solar-Panel"));
const Cybertruck = React.lazy(() => import("@views/product/Cybertruck"));

const publicPaths = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/models", component: ModelS },
  { exact: true, path: "/model3", component: Model3 },
  { exact: true, path: "/modelX", component: ModelX },
  { exact: true, path: "/ModelY", component: ModelY },
  { exact: true, path: "/solar-roof", component: SolarRoof },
  { exact: true, path: "/solar-panel", component: SolarPanel },
  { exact: true, path: "/cybertruck", component: Cybertruck },
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Router>
    <Switch>
      <Layout>
        <Suspense fallback={<div />}>
          {publicRoutes}
          {/* <Route component={NotFound} /> */}
        </Suspense>
      </Layout>
    </Switch>
  </Router>
);
