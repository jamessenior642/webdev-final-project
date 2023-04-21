import React, { useEffect, useState } from "react";
import { useProfile } from "./profile-context";

const SecureContent = ({ loggedincontent, nonloggedincontent }) => {
  const { checkLoggedIn } = useProfile();
  const [loggedIn, setLoggedIn] = useState(false);
  const check = async () => {
    try {
      await checkLoggedIn();
      setLoggedIn(true);
    } catch (e) {
      console.log(e)
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    check();
  }, []);
  if (loggedIn) {
    return loggedincontent;
  }
  return nonloggedincontent;
};

export default SecureContent;