import React, { useContext, useState, useEffect } from "react";
import * as service from "../services/auth-service";

const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const p = await service.login(email, password);
      setProfile(p);
    } catch (e) {
      throw e;

    }
  };

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const logout = async () => {
    try {
      await service.logout();
      setProfile(null);
    } catch (e) {
      throw e;
    }
  };

  const checkLoggedIn = async () => {
    try {
      const p = await service.profile();
      setProfile(p);
      return p;
    } catch (e) {
      throw e;
    }
  };

  const signup = async (email, username, password) => {
    try {
      const newUser = await service.signup(email, username, password);
      setProfile(newUser);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await service.profile();
      setProfile(profileData);
      setLoading(false);
    };
  
    fetchProfile();
  }, []);



  const value = { profile, signup, checkLoggedIn, login, logout };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => {


  return useContext(ProfileContext);
};
