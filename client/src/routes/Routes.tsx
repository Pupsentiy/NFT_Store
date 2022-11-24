import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { routesConfig } from "./routesConfig";

const InternalRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {Object.values(routesConfig).map(
          ({ path, component: Component }, index: number) => {
            return <Route key={index} path={path} element={<Component />} />;
          }
        )}
      </Route>
    </Routes>
  );
};

export default InternalRoutes;
