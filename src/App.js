import React from "react";
import Marketplace from "./marketplace";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/*" element={<Marketplace/>} />

      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
