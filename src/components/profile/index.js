import React from 'react';
import * as service from "../../services/auth-service";
import { useProfile } from "../../context/profile-context";
import * as userService from "../../services/user-service";
import { Link } from "react-router-dom";


const Profile = () => {
    const { profile } = useProfile();
    const [user, setUser] = React.useState();
    const [userName, setUserName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [err, setError] = React.useState(false);

    const checkUser = async () => {
        const curUser = await userService.getUserByEmail(profile.email);
        setUser(user)
        setUserName(curUser.username);
        setEmail(curUser.email);
        setPassword(curUser.password);
        setError(false);
    }

    React.useEffect(() => {
        checkUser();
    }, []);

    const handleUpdate = async () => {
        if (userName === "" || email === "" || password === "") {
            setError(true);
        } else {
            await userService.updateUser(profile._id, userName, email, password, profile.role);
            const user = await userService.getUserByEmail(email);
            setUser(user.username);
        }
    }
    return (
        <div>
            <h1>Profile</h1>

            <div className="header">
            <h2>Email: {profile.email}</h2>
            <h2>Username: {profile.username}</h2>
            </div> 

            <div className="form-group">
                <label htmlFor="username">Change Username </label>
                <input type="text" className="form-control" id="username" placeholder={userName} onChange={(e) => setUserName(e.target.value)} />
                <button className="btn btn-primary" onClick={() => { handleUpdate(); }}>
                    Update Username
                </button>
                </div>

                <div className="form-group mt-3">
                <label htmlFor="email">Change Email </label>
                <input type="text" className="form-control" id="email" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="btn btn-primary" onClick={() => {
                    window.location.reload();
                }}>Update Email</button>
                </div> 

                <div className="form-group mt-3">
                <label htmlFor="password">Change Password </label>
                <input type="text" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary" onClick={() => {
                    window.location.reload();
                }}>Update Password</button>
                </div>
        </div>
    );
};


export default Profile;