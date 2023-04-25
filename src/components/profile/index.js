import React from "react";
import * as service from "../../services/auth-service";
import { useProfile } from "../../context/profile-context";
import * as userService from "../../services/user-service";
import { Link } from "react-router-dom";

const Profile = () => {
  const { profile } = useProfile();
  const [userName, setUserName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [err, setError] = React.useState(false);

  const checkUser = async () => {
    const user = await userService.getUserByEmail(profile.email);
    setUserName(user.userName);
    setEmail(user.email);
    setPassword(user.password);
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Profile</h1>
      <h2>Email: {profile.email}</h2>
      <h2>Username: {profile.userName}</h2>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group my-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={async () => {
                try {
                  await userService.updateUser(profile._id, userName, email, password);
                  setError(false);
                } catch (e) {
                  setError(true);
                }
              }}
            >
              Update
            </button>
          </form>
          {err && (
            <div className="alert alert-danger alert-dismissible mt-3" role="alert">
              Please make sure you have a valid login!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;