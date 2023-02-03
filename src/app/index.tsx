import { withProviders } from "./providers";
import { Pages } from "../pages";
import React from "react";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      {/* Потенциально сюда можно вставить 
     Единый на все приложение хедер
      Либо же делать это на отдельных страницах*/}
      <Pages />
    </div>
  );
};

export default withProviders(App);
