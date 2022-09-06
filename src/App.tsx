import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};
