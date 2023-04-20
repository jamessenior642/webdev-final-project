import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Marketplace from "./marketplace";
import Home from "./marketplace/home";
import Login from "./marketplace/login";
import SignUp from "./marketplace/login/signup";
import Search from "./marketplace/search";
import Profile from "./marketplace/profile";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/*" element={<Marketplace/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
