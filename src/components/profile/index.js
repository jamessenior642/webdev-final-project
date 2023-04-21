import React from 'react';
import * as service from "../../services/auth-service";
import { useProfile } from "../../context/profile-context";
import { Link } from "react-router-dom";


const Profile = () => {
    const { profile } = useProfile();
        
    return (
        <div>
            <h1>Profile</h1>

        </div>
    )
}

export default Profile;