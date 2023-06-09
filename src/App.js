import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Search from "./components/search";
import Profile from "./components/profile";
import ProfileView from "./components/profile-view";
import Details from "./components/details";
import Logout from "./components/logout";
import { ProfileProvider } from "./context/profile-context";
import SecureRoute from "./components/secure-route";


function App() {
  return (
    <ProfileProvider>
    <BrowserRouter>
    <div className="container">
    <NavBar/>
      <Routes>
      <Route path="/profile"
      element={
         <SecureRoute>
          <Profile />
          </SecureRoute>
          }/>
        <Route path="/*" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/search/:searchQuery" element={<Search/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile-view/:userID" element={<ProfileView/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </ProfileProvider>

  );
}

export default App;
