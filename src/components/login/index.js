import { React, useRef, useState } from "react";
import { useProfile } from "../../context/profile-context";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const { login } = useProfile();
    const [err, setError] = useState(false);

    const loginSubmit = async () => {
        if (
            !(
                emailRef.current.value === "" ||
                passwordRef.current.value === ""
            )
        ) {
            try {
                await login(emailRef.current.value, passwordRef.current.value);
                navigate("/");
            } catch (e) {
                setError(true);
            }
        }

    };
    return (
        <div className = "left-text position-relative">
        <h1>Login</h1>
        <div className="form-group">
        Email
            <input 
        type="email" 
        ref={emailRef}
        placeholder="johndoe@webdev.com"
        className="form-control"
        />
      Password
      <input
        type="password"
        ref={passwordRef}
        placeholder="supersecretpassword"
        className="form-control"
      />
      </div> 
    {err && (
            <div className="alert alert-danger alert-dismissible" role="alert">
                Please make sure you have a valid login!
            </div>
        )}
        <button className="btn btn-primary" onClick={loginSubmit}>
            Login
        </button>
        <br/> 
        <Link to="/signup">Don't have an account?</Link>
        </div>
);
};

export default Login;
