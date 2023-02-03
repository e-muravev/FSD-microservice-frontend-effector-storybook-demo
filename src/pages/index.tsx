import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import RootPage from "./root";

const TestPage = lazy(() => import("./test"));

export const Pages = () => {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<RootPage />} />
    </Routes>
  );
};

export default Pages;
