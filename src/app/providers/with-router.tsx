import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <Router>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </Router>
  );
