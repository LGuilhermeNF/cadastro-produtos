import React from "react";
import Navbar from "./components/Navbar/Navbar";
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
