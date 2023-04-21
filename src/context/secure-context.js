import React, { useEffect, useState } from "react";
import { useProfile } from "./profile-context";

const SecureContent = ({ loggedInContent, nonloggedInContent }) => {
  const { checkLoggedIn } = useProfile();
  const [loggedIn, setLoggedIn] = useState(false);
  const check = async () => {
    try {
      await checkLoggedIn();
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    check();
  }, []);
  if (loggedIn) {
    return loggedInContent;
  }
  return nonloggedInContent;
};

export default SecureContent;