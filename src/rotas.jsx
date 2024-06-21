// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Home from "./views/home";
// import { CadastroProduto } from "./views/produtos/cadastro";
// import { ConsultaProdutos } from "./views/produtos/consultaProdutos";

// export default () => {
//   return (
//       <Routes>
//         <Route exact path="/cadastro-produtos:sku?" element={<CadastroProduto />} />
//         <Route exact path="/consulta-produtos" element={<ConsultaProdutos />} />
//         <Route exact path="/" element={<Home />} />
//       </Routes>
//   );
// };

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consultaProdutos'

export default () => {
    return (
        <Routes>
            <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
            <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
            <Route exact path="/" component={Home} />
        </Routes>
    )
}