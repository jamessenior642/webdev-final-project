import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Marketplace from "./marketplace";
import Home from "./marketplace/home";
import Login from "./marketplace/login";
import SignUp from "./marketplace/signup";
import Search from "./marketplace/search";
import Profile from "./marketplace/profile";
import { ProfileProvider } from "./context/profile-context";
import SecureRoute from "./marketplace/secure-route";


function App() {
  return (
    <ProfileProvider>
    <BrowserRouter>
    <div className="container">
      <Routes>
      <Route path="profile"
      element={
         <SecureRoute>
          <Profile />
          </SecureRoute>
          }/>
        <Route path="/*" element={<Marketplace/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
      </div>
    </BrowserRouter>
    </ProfileProvider>

  );
}

export default App;
