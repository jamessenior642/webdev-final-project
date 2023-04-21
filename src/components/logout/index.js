// create a component to handle logout and redirect to home page

import React, { useEffect } from "react";
import { useProfile } from "../../context/profile-context.js";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useProfile();
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/")
        navigate(0)
    }, []);
    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    )
    ;
};

export default Logout;

