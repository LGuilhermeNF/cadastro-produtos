import React from "react";
import Navbar from "./components/Navibar/Navbar";
import Rotas from "./rotas";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Rotas />
      </div>
    </>
  );
}

export default App;
