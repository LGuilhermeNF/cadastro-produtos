import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home";
import { CadstroProduto } from "./views/produtos/cadastro";

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/cadastro-produtos" element={<CadstroProduto />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
